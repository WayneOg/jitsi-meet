export var StatisticsEvents;
(function (StatisticsEvents) {
    /**
     * Notifies about audio level in RTP statistics by SSRC.
     *
     * @param ssrc - The synchronization source identifier (SSRC) of the
     * endpoint/participant whose audio level is being reported.
     * @param {number} audioLevel - The audio level of <tt>ssrc</tt> according to
     * RTP statistics.
     * @param {boolean} isLocal - <tt>true</tt> if <tt>ssrc</tt> identifies the
     * local endpoint/participant; otherwise, <tt>false</tt>.
     */
    StatisticsEvents["AUDIO_LEVEL"] = "statistics.audioLevel";
    /**
     * An event fired just before the statistics module gets disposes and it's
     * the last chance to submit logs.
     */
    StatisticsEvents["BEFORE_DISPOSED"] = "statistics.before_disposed";
    /**
     * An event carrying all statistics by ssrc.
     */
    StatisticsEvents["BYTE_SENT_STATS"] = "statistics.byte_sent_stats";
    /**
     * An event carrying connection statistics.
     *
     * @param {object} connectionStats - The connection statistics carried by the
     * event such as <tt>bandwidth</tt>, <tt>bitrate</tt>, <tt>packetLoss</tt>,
     * <tt>resolution</tt>, and <tt>transport</tt>.
     */
    StatisticsEvents["CONNECTION_STATS"] = "statistics.connectionstats";
    /**
     * An event carrying the encode time stats for all the local video sources.
     */
    StatisticsEvents["ENCODE_TIME_STATS"] = "statistics.encode_time_stats";
})(StatisticsEvents || (StatisticsEvents = {}));
//# sourceMappingURL=Events.js.map