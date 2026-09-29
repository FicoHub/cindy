package expo.modules.cindyquotawidget

import android.app.PendingIntent
import android.appwidget.AppWidgetManager
import android.appwidget.AppWidgetProvider
import android.content.ComponentName
import android.content.Context
import android.content.Intent
import android.content.res.Configuration
import android.net.Uri
import android.os.Bundle
import android.view.View
import android.widget.RemoteViews
import org.json.JSONObject
import java.text.DateFormat
import java.util.Date
import java.util.Locale
import kotlin.math.roundToInt

class QuotaWidgetProvider : AppWidgetProvider() {
  override fun onUpdate(context: Context, manager: AppWidgetManager, ids: IntArray) { ids.forEach { update(context, manager, it) } }
  override fun onAppWidgetOptionsChanged(context: Context, manager: AppWidgetManager, id: Int, options: Bundle) { update(context, manager, id) }
  companion object {
    fun updateAll(context: Context) {
      val manager = AppWidgetManager.getInstance(context)
      manager.getAppWidgetIds(ComponentName(context, QuotaWidgetProvider::class.java)).forEach { update(context, manager, it) }
    }
    private fun update(context: Context, manager: AppWidgetManager, id: Int) {
      val prefs = context.getSharedPreferences("cindy-quota-presentation", 0)
      val config = Configuration(context.resources.configuration)
      val locale = Locale.ENGLISH
      config.setLocale(locale)
      val mode = prefs.getString("appearance", "system")
      if (mode != "system") config.uiMode = (config.uiMode and Configuration.UI_MODE_NIGHT_MASK.inv()) or
        (if (mode == "dark") Configuration.UI_MODE_NIGHT_YES else Configuration.UI_MODE_NIGHT_NO)
      val themed = context.createConfigurationContext(config)
      fun text(key: String): String {
        val resource = themed.resources.getIdentifier("cindy_widget_" + key.replace(Regex("[A-Z]")) { "_" + it.value.lowercase() }, "string", context.packageName)
        return if (resource == 0) "" else themed.getString(resource)
      }
      fun date(raw: Any?): String {
        val millis = (raw as? Number)?.toLong() ?: return text("unknownTime")
        return DateFormat.getDateTimeInstance(DateFormat.SHORT, DateFormat.SHORT, locale).format(Date(millis))
      }
      val snapshot = QuotaSnapshot.load(context)
      val rows = snapshot.getJSONArray("rows")
      val views = RemoteViews(context.packageName, R.layout.cindy_quota_widget)
      val options = manager.getAppWidgetOptions(id)
      val count = if (options.getInt(AppWidgetManager.OPTION_APPWIDGET_MIN_HEIGHT) >= 200) 3 else 1
      val ids = listOf(R.id.quota_row_0, R.id.quota_row_1, R.id.quota_row_2)
      views.setTextViewText(R.id.quota_heading, if (snapshot.getString("source") == "demo") "Cindy · " + text("demo") else "Cindy")
      // Resolve both palettes from generated Mobile tokens, including an explicit in-app theme override.
      val dark = (config.uiMode and Configuration.UI_MODE_NIGHT_MASK) == Configuration.UI_MODE_NIGHT_YES
      views.setInt(R.id.quota_root, "setBackgroundResource", if (dark) R.drawable.cindy_quota_background_dark else R.drawable.cindy_quota_background_light)
      views.setTextColor(R.id.quota_heading, themed.getColor(R.color.cindy_widget_text_secondary))
      views.setTextColor(R.id.quota_updated, themed.getColor(R.color.cindy_widget_text_secondary))
      val now = System.currentTimeMillis()
      for ((index, viewId) in ids.withIndex()) {
        views.setTextColor(viewId, themed.getColor(R.color.cindy_widget_text_primary))
        val visible = index < minOf(count, rows.length()) || (index == 0 && rows.length() == 0)
        views.setViewVisibility(viewId, if (visible) View.VISIBLE else View.GONE)
        if (!visible) continue
        if (rows.length() == 0) { views.setTextViewText(viewId, text("empty")); continue }
        val row = rows.getJSONObject(index)
        val platform = when (row.getString("platform")) { "codex" -> "Codex"; "claude" -> "Claude"; else -> "SuperGrok" }
        val windows = row.getJSONArray("windows")
        val window = (0 until windows.length()).map { windows.getJSONObject(it) }.filter { row.getString("platform") == "claude" || it.optInt("minutes") == 10080 }.minByOrNull { if (it.optInt("minutes") == 10080 && it.optString("kind") != "scoped") 0 else 1 }
        val lines = mutableListOf(platform)
        if (window == null) lines.add(text("unavailable")) else {
          val state = QuotaSnapshot.state(row, window, snapshot.getString("connection"), now)
          val hasValue = state == "fresh"
          val value = if (hasValue) text("remaining").replace("{{percent}}", window.getDouble("remainingPercent").roundToInt().toString()) else text(state)
          val label = if (window.optString("kind") == "scoped") window.optString("scope") else text(when (window.optInt("minutes")) { 300 -> "fiveHour"; 10080 -> "sevenDay"; else -> window.getString("kind") })
          lines.add(label + " · " + value)
          lines.add(text("resets") + " " + date(window.opt("resetAtMs")))
        }
        views.setTextViewText(viewId, lines.joinToString("\n"))
      }
      val oldest = (0 until rows.length()).flatMap { rowIndex ->
        val windows = rows.getJSONObject(rowIndex).getJSONArray("windows")
        (0 until windows.length()).mapNotNull { (windows.getJSONObject(it).opt("observedAtMs") as? Number)?.toLong() }
      }.minOrNull()
      views.setTextViewText(R.id.quota_updated, if (rows.length() == 0) "" else text("updated") + " " + date(oldest))
      val launch = context.packageManager.getLaunchIntentForPackage(context.packageName)
      if (launch != null) {
        val info = context.packageManager.getApplicationInfo(context.packageName, android.content.pm.PackageManager.GET_META_DATA)
        val scheme = info.metaData?.getString("cindy.quota.scheme")
        if (scheme != null) {
          launch.action = Intent.ACTION_VIEW
          launch.data = Uri.parse("$scheme://subscription-widgets")
          launch.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK or Intent.FLAG_ACTIVITY_CLEAR_TOP)
          views.setOnClickPendingIntent(R.id.quota_root, PendingIntent.getActivity(context, id, launch, PendingIntent.FLAG_UPDATE_CURRENT or PendingIntent.FLAG_IMMUTABLE))
        }
      }
      manager.updateAppWidget(id, views)
    }
  }
}
