// @flow

import { Creative } from './base'
import { VideoClicks } from '../clicks/video'
import { TrackingEvents } from '../tracking/events'

import type { TimeOffset } from '../time-offset/base'
import type { MediaFile } from '../core/media-file'
import type { Icon } from '../core/icon'
import type { Type } from '../type'

/**
 * Represents a linear creative.
 *
 * @class Linear
 * @extends Creative
 * @author Tim De Pauw <tim.depauw@zentrick.com>
 * @copyright © 2016 Zentrick nv
 */
export class Linear extends Creative {
  _skipoffset: TimeOffset
  _adParameters: string
  _duration: number
  _mediaFiles: MediaFile[]
  _trackingEvents: TrackingEvents
  _videoClicks: VideoClicks
  _icons: Icon[]

  constructor () {
    super()
    this._mediaFiles = []
    this._trackingEvents = new TrackingEvents()
    this._videoClicks = new VideoClicks()
    this._icons = []
  }

  /**
   * The time interval after which this linear creative can be skipped.
   *
   * @type {TimeOffset}
   */
  get skipoffset (): TimeOffset {
    return this._skipoffset
  }

  set skipoffset (value: TimeOffset) {
    this._skipoffset = value
  }

  /**
   * The ad parameters for this linear creative.
   *
   * @type {string}
   */
  get adParameters (): string {
    return this._adParameters
  }

  set adParameters (value: string) {
    this._adParameters = value
  }

  /**
   * The duration of this linear creative in seconds.
   *
   * @type {number}
   */
  get duration (): number {
    return this._duration
  }

  set duration (value: number) {
    this._duration = value
  }

  /**
   * The media files within this linear creative.
   *
   * @type {MediaFile[]}
   * @readonly
   */
  get mediaFiles (): MediaFile[] {
    return this._mediaFiles
  }

  /**
   * The event tracking configuration for this linear creative.
   *
   * @type {TrackingEvents}
   * @readonly
   */
  get trackingEvents (): TrackingEvents {
    return this._trackingEvents
  }

  /**
   * The video click tracking configuration for this linear creative.
   *
   * @type {VideoClicks}
   * @readonly
   */
  get videoClicks (): VideoClicks {
    return this._videoClicks
  }

  /**
   * The icons for this linear creative.
   *
   * @type {Icon[]}
   * @readonly
   */
  get icons (): Icon[] {
    return this._icons
  }

  get $type (): Type {
    return 'Linear'
  }
}
