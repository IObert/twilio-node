/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2010 = require('../../V2010');
import { EventList } from './call/event';
import { EventListInstance } from './call/event';
import { FeedbackList } from './call/feedback';
import { FeedbackListInstance } from './call/feedback';
import { FeedbackSummaryListInstance } from './call/feedbackSummary';
import { NotificationList } from './call/notification';
import { NotificationListInstance } from './call/notification';
import { PaymentList } from './call/payment';
import { PaymentListInstance } from './call/payment';
import { RecordingList } from './call/recording';
import { RecordingListInstance } from './call/recording';
import { SerializableClass } from '../../../../interfaces';
import { SiprecList } from './call/siprec';
import { SiprecListInstance } from './call/siprec';
import { StreamList } from './call/stream';
import { StreamListInstance } from './call/stream';

type CallEvent = 'initiated'|'ringing'|'answered'|'completed';

type CallStatus = 'queued'|'ringing'|'in-progress'|'completed'|'busy'|'failed'|'no-answer'|'canceled';

type CallUpdateStatus = 'canceled'|'completed';

/**
 * Initialize the CallList
 *
 * @param version - Version of the resource
 * @param accountSid - The SID of the Account that created this resource
 */
declare function CallList(version: V2010, accountSid: string): CallListInstance;

/**
 * Options to pass to update
 *
 * @property fallbackMethod - HTTP Method to use with fallback_url
 * @property fallbackUrl - Fallback URL in case of error
 * @property method - HTTP method to use to fetch TwiML
 * @property status - The new status to update the call with.
 * @property statusCallback - The URL we should call to send status information to your application
 * @property statusCallbackMethod - HTTP Method to use to call status_callback
 * @property timeLimit - The maximum duration of the call in seconds.
 * @property twiml - TwiML instructions for the call
 * @property url - The absolute URL that returns TwiML for this call
 */
interface CallInstanceUpdateOptions {
  fallbackMethod?: string;
  fallbackUrl?: string;
  method?: string;
  status?: CallUpdateStatus;
  statusCallback?: string;
  statusCallbackMethod?: string;
  timeLimit?: number;
  twiml?: string;
  url?: string;
}

interface CallListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): CallContext;
  /**
   * create a CallInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: CallListInstanceCreateOptions, callback?: (error: Error | null, item: CallInstance) => any): Promise<CallInstance>;
  /**
   * Streams CallInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Function to process each record
   */
  each(callback?: (item: CallInstance, done: (err?: Error) => void) => void): void;
  /**
   * Streams CallInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory
   * efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Function to process each record
   */
  each(opts?: CallListInstanceEachOptions, callback?: (item: CallInstance, done: (err?: Error) => void) => void): void;
  feedbackSummaries?: FeedbackSummaryListInstance;
  /**
   * Constructs a call
   *
   * @param sid - The SID of the Call resource to fetch
   */
  get(sid: string): CallContext;
  /**
   * Retrieve a single target page of CallInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  getPage(callback?: (error: Error | null, items: CallPage) => any): Promise<CallPage>;
  /**
   * Retrieve a single target page of CallInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param targetUrl - API-generated URL for the requested results page
   * @param callback - Callback to handle list of records
   */
  getPage(targetUrl?: string, callback?: (error: Error | null, items: CallPage) => any): Promise<CallPage>;
  /**
   * Lists CallInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  list(callback?: (error: Error | null, items: CallInstance[]) => any): Promise<CallInstance[]>;
  /**
   * Lists CallInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  list(opts?: CallListInstanceOptions, callback?: (error: Error | null, items: CallInstance[]) => any): Promise<CallInstance[]>;
  /**
   * Retrieve a single page of CallInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param callback - Callback to handle list of records
   */
  page(callback?: (error: Error | null, items: CallPage) => any): Promise<CallPage>;
  /**
   * Retrieve a single page of CallInstance records from the API.
   *
   * The request is executed immediately.
   *
   * If a function is passed as the first argument, it will be used as the callback
   * function.
   *
   * @param opts - Options for request
   * @param callback - Callback to handle list of records
   */
  page(opts?: CallListInstancePageOptions, callback?: (error: Error | null, items: CallPage) => any): Promise<CallPage>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property applicationSid - The SID of the Application resource that will handle the call
 * @property asyncAmd - Enable asynchronous AMD
 * @property asyncAmdStatusCallback - The URL we should call to send amd status information to your application
 * @property asyncAmdStatusCallbackMethod - HTTP Method to use with async_amd_status_callback
 * @property byoc - BYOC trunk SID (Beta)
 * @property callReason - Reason for the call (Branded Calls Beta)
 * @property callToken - A token string needed to invoke a forwarded call with a CallerId recieved on a previous incoming call
 * @property callerId - The phone number, SIP address, or Client identifier that made this call. Phone numbers are in E.164 format (e.g., +16175551212). SIP addresses are formatted as `name@company.com`.
 * @property fallbackMethod - HTTP Method to use with fallback_url
 * @property fallbackUrl - Fallback URL in case of error
 * @property from - Twilio number from which to originate the call
 * @property machineDetection - Enable machine detection or end of greeting detection
 * @property machineDetectionSilenceTimeout - Number of milliseconds of initial silence
 * @property machineDetectionSpeechEndThreshold - Number of milliseconds of silence after speech activity
 * @property machineDetectionSpeechThreshold - Number of milliseconds for measuring stick for the length of the speech activity
 * @property machineDetectionTimeout - Number of seconds to wait for machine detection
 * @property method - HTTP method to use to fetch TwiML
 * @property record - Whether to record the call
 * @property recordingChannels - The number of channels in the final recording
 * @property recordingStatusCallback - The URL that we call when the recording is available to be accessed
 * @property recordingStatusCallbackEvent - The recording status events that will trigger calls to the URL specified in `recording_status_callback`
 * @property recordingStatusCallbackMethod - The HTTP method we should use when calling the `recording_status_callback` URL
 * @property recordingTrack - Which track(s) to record
 * @property sendDigits - The digits to dial after connecting to the number
 * @property sipAuthPassword - The password required to authenticate the user account specified in `sip_auth_username`.
 * @property sipAuthUsername - The username used to authenticate the caller making a SIP call
 * @property statusCallback - The URL we should call to send status information to your application
 * @property statusCallbackEvent - The call progress events that we send to the `status_callback` URL.
 * @property statusCallbackMethod - HTTP Method to use with status_callback
 * @property timeLimit - The maximum duration of the call in seconds.
 * @property timeout - Number of seconds to wait for an answer
 * @property to - Phone number, SIP address, or client identifier to call
 * @property trim - Set this parameter to control trimming of silence on the recording.
 * @property twiml - TwiML instructions for the call
 * @property url - The absolute URL that returns TwiML for this call
 */
interface CallListInstanceCreateOptions {
  applicationSid?: string;
  asyncAmd?: string;
  asyncAmdStatusCallback?: string;
  asyncAmdStatusCallbackMethod?: string;
  byoc?: string;
  callReason?: string;
  callToken?: string;
  callerId?: string;
  fallbackMethod?: string;
  fallbackUrl?: string;
  from: string;
  machineDetection?: string;
  machineDetectionSilenceTimeout?: number;
  machineDetectionSpeechEndThreshold?: number;
  machineDetectionSpeechThreshold?: number;
  machineDetectionTimeout?: number;
  method?: string;
  record?: boolean;
  recordingChannels?: string;
  recordingStatusCallback?: string;
  recordingStatusCallbackEvent?: string | string[];
  recordingStatusCallbackMethod?: string;
  recordingTrack?: string;
  sendDigits?: string;
  sipAuthPassword?: string;
  sipAuthUsername?: string;
  statusCallback?: string;
  statusCallbackEvent?: string | string[];
  statusCallbackMethod?: string;
  timeLimit?: number;
  timeout?: number;
  to: string;
  trim?: string;
  twiml?: string;
  url?: string;
}

/**
 * Options to pass to each
 *
 * @property callback -
 *                         Function to process each record. If this and a positional
 *                         callback are passed, this one will be used
 * @property done - Function to be called upon completion of streaming
 * @property endTime - Only include calls that ended on this date
 * @property endTimeAfter - Only include calls that ended on this date
 * @property endTimeBefore - Only include calls that ended on this date
 * @property from - Phone number or Client identifier to filter `from` on
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         each() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no pageSize is defined but a limit is defined,
 *                         each() will attempt to read the limit with the most efficient
 *                         page size, i.e. min(limit, 1000)
 * @property parentCallSid - Parent call SID to filter on
 * @property startTime - Only include calls that started on this date
 * @property startTimeAfter - Only include calls that started on this date
 * @property startTimeBefore - Only include calls that started on this date
 * @property status - The status of the resources to read
 * @property to - Phone number or Client identifier of calls to include
 */
interface CallListInstanceEachOptions {
  callback?: (item: CallInstance, done: (err?: Error) => void) => void;
  done?: Function;
  endTime?: Date;
  endTimeAfter?: Date;
  endTimeBefore?: Date;
  from?: string;
  limit?: number;
  pageSize?: number;
  parentCallSid?: string;
  startTime?: Date;
  startTimeAfter?: Date;
  startTimeBefore?: Date;
  status?: CallStatus;
  to?: string;
}

/**
 * Options to pass to list
 *
 * @property endTime - Only include calls that ended on this date
 * @property endTimeAfter - Only include calls that ended on this date
 * @property endTimeBefore - Only include calls that ended on this date
 * @property from - Phone number or Client identifier to filter `from` on
 * @property limit -
 *                         Upper limit for the number of records to return.
 *                         list() guarantees never to return more than limit.
 *                         Default is no limit
 * @property pageSize -
 *                         Number of records to fetch per request,
 *                         when not set will use the default value of 50 records.
 *                         If no page_size is defined but a limit is defined,
 *                         list() will attempt to read the limit with the most
 *                         efficient page size, i.e. min(limit, 1000)
 * @property parentCallSid - Parent call SID to filter on
 * @property startTime - Only include calls that started on this date
 * @property startTimeAfter - Only include calls that started on this date
 * @property startTimeBefore - Only include calls that started on this date
 * @property status - The status of the resources to read
 * @property to - Phone number or Client identifier of calls to include
 */
interface CallListInstanceOptions {
  endTime?: Date;
  endTimeAfter?: Date;
  endTimeBefore?: Date;
  from?: string;
  limit?: number;
  pageSize?: number;
  parentCallSid?: string;
  startTime?: Date;
  startTimeAfter?: Date;
  startTimeBefore?: Date;
  status?: CallStatus;
  to?: string;
}

/**
 * Options to pass to page
 *
 * @property endTime - Only include calls that ended on this date
 * @property endTimeAfter - Only include calls that ended on this date
 * @property endTimeBefore - Only include calls that ended on this date
 * @property from - Phone number or Client identifier to filter `from` on
 * @property pageNumber - Page Number, this value is simply for client state
 * @property pageSize - Number of records to return, defaults to 50
 * @property pageToken - PageToken provided by the API
 * @property parentCallSid - Parent call SID to filter on
 * @property startTime - Only include calls that started on this date
 * @property startTimeAfter - Only include calls that started on this date
 * @property startTimeBefore - Only include calls that started on this date
 * @property status - The status of the resources to read
 * @property to - Phone number or Client identifier of calls to include
 */
interface CallListInstancePageOptions {
  endTime?: Date;
  endTimeAfter?: Date;
  endTimeBefore?: Date;
  from?: string;
  pageNumber?: number;
  pageSize?: number;
  pageToken?: string;
  parentCallSid?: string;
  startTime?: Date;
  startTimeAfter?: Date;
  startTimeBefore?: Date;
  status?: CallStatus;
  to?: string;
}

interface CallPayload extends CallResource, Page.TwilioResponsePayload {
}

interface CallResource {
  account_sid: string;
  annotation: string;
  answered_by: string;
  api_version: string;
  caller_name: string;
  date_created: Date;
  date_updated: Date;
  direction: string;
  duration: string;
  end_time: Date;
  forwarded_from: string;
  from: string;
  from_formatted: string;
  group_sid: string;
  parent_call_sid: string;
  phone_number_sid: string;
  price: string;
  price_unit: string;
  queue_time: string;
  sid: string;
  start_time: Date;
  status: CallStatus;
  subresource_uris: string;
  to: string;
  to_formatted: string;
  trunk_sid: string;
  uri: string;
}

interface CallSolution {
  accountSid?: string;
}


declare class CallContext {
  /**
   * Initialize the CallContext
   *
   * @param version - Version of the resource
   * @param accountSid - The SID of the Account that created the resource(s) to fetch
   * @param sid - The SID of the Call resource to fetch
   */
  constructor(version: V2010, accountSid: string, sid: string);

  events: EventListInstance;
  feedback: FeedbackListInstance;
  /**
   * fetch a CallInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CallInstance) => any): Promise<CallInstance>;
  notifications: NotificationListInstance;
  payments: PaymentListInstance;
  recordings: RecordingListInstance;
  /**
   * remove a CallInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CallInstance) => any): Promise<boolean>;
  siprec: SiprecListInstance;
  streams: StreamListInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a CallInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: CallInstance) => any): Promise<CallInstance>;
  /**
   * update a CallInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CallInstanceUpdateOptions, callback?: (error: Error | null, items: CallInstance) => any): Promise<CallInstance>;
}


declare class CallInstance extends SerializableClass {
  /**
   * Initialize the CallContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param accountSid - The SID of the Account that created this resource
   * @param sid - The SID of the Call resource to fetch
   */
  constructor(version: V2010, payload: CallPayload, accountSid: string, sid: string);

  private _proxy: CallContext;
  accountSid: string;
  annotation: string;
  answeredBy: string;
  apiVersion: string;
  callerName: string;
  dateCreated: Date;
  dateUpdated: Date;
  direction: string;
  duration: string;
  endTime: Date;
  /**
   * Access the events
   */
  events(): EventListInstance;
  /**
   * Access the feedback
   */
  feedback(): FeedbackListInstance;
  /**
   * fetch a CallInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: CallInstance) => any): Promise<CallInstance>;
  forwardedFrom: string;
  from: string;
  fromFormatted: string;
  groupSid: string;
  /**
   * Access the notifications
   */
  notifications(): NotificationListInstance;
  parentCallSid: string;
  /**
   * Access the payments
   */
  payments(): PaymentListInstance;
  phoneNumberSid: string;
  price: string;
  priceUnit: string;
  queueTime: string;
  /**
   * Access the recordings
   */
  recordings(): RecordingListInstance;
  /**
   * remove a CallInstance
   *
   * @param callback - Callback to handle processed record
   */
  remove(callback?: (error: Error | null, items: CallInstance) => any): Promise<boolean>;
  sid: string;
  /**
   * Access the siprec
   */
  siprec(): SiprecListInstance;
  startTime: Date;
  status: CallStatus;
  /**
   * Access the streams
   */
  streams(): StreamListInstance;
  subresourceUris: string;
  to: string;
  toFormatted: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  trunkSid: string;
  /**
   * update a CallInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: CallInstance) => any): Promise<CallInstance>;
  /**
   * update a CallInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: CallInstanceUpdateOptions, callback?: (error: Error | null, items: CallInstance) => any): Promise<CallInstance>;
  uri: string;
}


declare class CallPage extends Page<V2010, CallPayload, CallResource, CallInstance> {
  /**
   * Initialize the CallPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2010, response: Response<string>, solution: CallSolution);

  /**
   * Build an instance of CallInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: CallPayload): CallInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { CallContext, CallEvent, CallInstance, CallInstanceUpdateOptions, CallList, CallListInstance, CallListInstanceCreateOptions, CallListInstanceEachOptions, CallListInstanceOptions, CallListInstancePageOptions, CallPage, CallPayload, CallResource, CallSolution, CallStatus, CallUpdateStatus }
