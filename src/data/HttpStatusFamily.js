import { HttpStatus } from './HttpStatus';

const HttpStatusFamily = Object.freeze({
  INFORMATIONAL: Object.freeze({
    name: 'INFORMATIONAL',
    statuses: [
      HttpStatus.CONTINUE,
      HttpStatus.SWITCHING_PROTOCOLS,
      HttpStatus.PROCESSING,
    ],
  }),
  SUCCESS: Object.freeze({
    name: 'SUCCESS',
    statuses: [
      HttpStatus.OK,
      HttpStatus.CREATED,
      HttpStatus.ACCEPTED,
      HttpStatus.NON_AUTHORITATIVE_INFORMATION,
      HttpStatus.NO_CONTENT,
      HttpStatus.RESET_CONTENT,
      HttpStatus.PARTIAL_CONTENT,
      HttpStatus.MULTI_STATUS,
      HttpStatus.ALREADY_REPORTED,
      HttpStatus.IM_USED,
    ],
  }),
  REDIRECTION: Object.freeze({
    name: 'REDIRECTION',
    statuses: [
      HttpStatus.MULTIPLE_CHOICES,
      HttpStatus.MOVED_PERMANENTLY,
      HttpStatus.FOUND,
      HttpStatus.SEE_OTHER,
      HttpStatus.NOT_MODIFIED,
      HttpStatus.USE_PROXY,
      HttpStatus.TEMPORARY_REDIRECT,
      HttpStatus.PERMANENT_REDIRECT,
    ],
  }),
  CLIENT_ERROR: Object.freeze({
    name: 'CLIENT ERROR',
    statuses: [
      HttpStatus.BAD_REQUEST,
      HttpStatus.UNAUTHORIZED,
      HttpStatus.PAYMENT_REQUIRED,
      HttpStatus.FORBIDDEN,
      HttpStatus.NOT_FOUND,
      HttpStatus.METHOD_NOT_ALLOWED,
      HttpStatus.NOT_ACCEPTABLE,
      HttpStatus.PROXY_AUTHENTICATION_REQUIRED,
      HttpStatus.REQUEST_TIMEOUT,
      HttpStatus.CONFLICT,
      HttpStatus.GONE,
      HttpStatus.LENGTH_REQUIRED,
      HttpStatus.PRECONDITION_FAILED,
      HttpStatus.PAYLOAD_TOO_LARGE,
      HttpStatus.REQUEST_URI_TOO_LONG,
      HttpStatus.UNSUPPORTED_MEDIA_TYPE,
      HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE,
      HttpStatus.EXPECTATION_FAILED,
      HttpStatus.IM_A_TEAPOT,
      HttpStatus.MISDIRECTED_REQUEST,
      HttpStatus.UNPROCESSABLE_ENTITY,
      HttpStatus.LOCKED,
      HttpStatus.FAILED_DEPENDENCY,
      HttpStatus.UPGRADE_REQUIRED,
      HttpStatus.PRECONDITION_REQUIRED,
      HttpStatus.TOO_MANY_REQUESTS,
      HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE,
      HttpStatus.CONNECTION_CLOSED_WITHOUT_RESPONSE,
      HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS,
      HttpStatus.CLIENT_CLOSED_REQUEST,
    ],
  }),
  SERVER_ERROR: Object.freeze({
    name: 'SERVER ERROR',
    statuses: [
      HttpStatus.INTERNAL_SERVER_ERROR,
      HttpStatus.NOT_IMPLEMENTED,
      HttpStatus.BAD_GATEWAY,
      HttpStatus.SERVICE_UNAVAILABLE,
      HttpStatus.GATEWAY_TIMEOUT,
      HttpStatus.HTTP_VERSION_NOT_SUPPORTED,
      HttpStatus.VARIANT_ALSO_NEGOTIATES,
      HttpStatus.INSUFFICIENT_STORAGE,
      HttpStatus.LOOP_DETECTED,
      HttpStatus.NOT_EXTENDED,
      HttpStatus.NETWORK_AUTHENTICATION_REQUIRED,
      HttpStatus.NETWORK_CONNECT_TIMEOUT_ERROR,
    ],
  }),
});

const HttpStatusCodesToFamily = Object.freeze({
  [HttpStatus.CONTINUE.code]: HttpStatusFamily.INFORMATIONAL,
  [HttpStatus.SWITCHING_PROTOCOLS.code]: HttpStatusFamily.INFORMATIONAL,
  [HttpStatus.PROCESSING.code]: HttpStatusFamily.INFORMATIONAL,
  [HttpStatus.OK.code]: HttpStatusFamily.SUCCESS,
  [HttpStatus.CREATED.code]: HttpStatusFamily.SUCCESS,
  [HttpStatus.ACCEPTED.code]: HttpStatusFamily.SUCCESS,
  [HttpStatus.NON_AUTHORITATIVE_INFORMATION.code]: HttpStatusFamily.SUCCESS,
  [HttpStatus.NO_CONTENT.code]: HttpStatusFamily.SUCCESS,
  [HttpStatus.RESET_CONTENT.code]: HttpStatusFamily.SUCCESS,
  [HttpStatus.PARTIAL_CONTENT.code]: HttpStatusFamily.SUCCESS,
  [HttpStatus.MULTI_STATUS.code]: HttpStatusFamily.SUCCESS,
  [HttpStatus.ALREADY_REPORTED.code]: HttpStatusFamily.SUCCESS,
  [HttpStatus.IM_USED.code]: HttpStatusFamily.SUCCESS,
  [HttpStatus.MULTIPLE_CHOICES.code]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.MOVED_PERMANENTLY.code]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.FOUND.code]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.SEE_OTHER.code]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.NOT_MODIFIED.code]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.USE_PROXY.code]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.TEMPORARY_REDIRECT.code]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.PERMANENT_REDIRECT.code]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.BAD_REQUEST.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.UNAUTHORIZED.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.PAYMENT_REQUIRED.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.FORBIDDEN.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.NOT_FOUND.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.METHOD_NOT_ALLOWED.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.NOT_ACCEPTABLE.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.PROXY_AUTHENTICATION_REQUIRED.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.REQUEST_TIMEOUT.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.CONFLICT.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.GONE.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.LENGTH_REQUIRED.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.PRECONDITION_FAILED.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.PAYLOAD_TOO_LARGE.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.REQUEST_URI_TOO_LONG.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.UNSUPPORTED_MEDIA_TYPE.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.EXPECTATION_FAILED.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.IM_A_TEAPOT.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.MISDIRECTED_REQUEST.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.UNPROCESSABLE_ENTITY.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.LOCKED.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.FAILED_DEPENDENCY.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.UPGRADE_REQUIRED.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.PRECONDITION_REQUIRED.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.TOO_MANY_REQUESTS.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.CONNECTION_CLOSED_WITHOUT_RESPONSE.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.CLIENT_CLOSED_REQUEST.code]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.INTERNAL_SERVER_ERROR]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.NOT_IMPLEMENTED.code]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.BAD_GATEWAY.code]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.SERVICE_UNAVAILABLE.code]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.GATEWAY_TIMEOUT.code]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.HTTP_VERSION_NOT_SUPPORTED.code]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.VARIANT_ALSO_NEGOTIATES.code]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.INSUFFICIENT_STORAGE.code]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.LOOP_DETECTED.code]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.NOT_EXTENDED.code]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.NETWORK_AUTHENTICATION_REQUIRED.code]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.NETWORK_CONNECT_TIMEOUT_ERROR.code]: HttpStatusFamily.SERVER_ERROR,
});

const HttpStatusNamesToFamily = Object.freeze({
  [HttpStatus.CONTINUE.name]: HttpStatusFamily.INFORMATIONAL,
  [HttpStatus.SWITCHING_PROTOCOLS.name]: HttpStatusFamily.INFORMATIONAL,
  [HttpStatus.PROCESSING.name]: HttpStatusFamily.INFORMATIONAL,
  [HttpStatus.OK.name]: HttpStatusFamily.SUCCESS,
  [HttpStatus.CREATED.name]: HttpStatusFamily.SUCCESS,
  [HttpStatus.ACCEPTED.name]: HttpStatusFamily.SUCCESS,
  [HttpStatus.NON_AUTHORITATIVE_INFORMATION.name]: HttpStatusFamily.SUCCESS,
  [HttpStatus.NO_CONTENT.name]: HttpStatusFamily.SUCCESS,
  [HttpStatus.RESET_CONTENT.name]: HttpStatusFamily.SUCCESS,
  [HttpStatus.PARTIAL_CONTENT.name]: HttpStatusFamily.SUCCESS,
  [HttpStatus.MULTI_STATUS.name]: HttpStatusFamily.SUCCESS,
  [HttpStatus.ALREADY_REPORTED.name]: HttpStatusFamily.SUCCESS,
  [HttpStatus.IM_USED.name]: HttpStatusFamily.SUCCESS,
  [HttpStatus.MULTIPLE_CHOICES.name]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.MOVED_PERMANENTLY.name]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.FOUND.name]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.SEE_OTHER.name]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.NOT_MODIFIED.name]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.USE_PROXY.name]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.TEMPORARY_REDIRECT.name]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.PERMANENT_REDIRECT.name]: HttpStatusFamily.REDIRECTION,
  [HttpStatus.BAD_REQUEST.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.UNAUTHORIZED.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.PAYMENT_REQUIRED.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.FORBIDDEN.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.NOT_FOUND.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.METHOD_NOT_ALLOWED.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.NOT_ACCEPTABLE.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.PROXY_AUTHENTICATION_REQUIRED.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.REQUEST_TIMEOUT.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.CONFLICT.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.GONE.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.LENGTH_REQUIRED.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.PRECONDITION_FAILED.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.PAYLOAD_TOO_LARGE.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.REQUEST_URI_TOO_LONG.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.UNSUPPORTED_MEDIA_TYPE.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.EXPECTATION_FAILED.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.IM_A_TEAPOT.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.MISDIRECTED_REQUEST.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.UNPROCESSABLE_ENTITY.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.LOCKED.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.FAILED_DEPENDENCY.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.UPGRADE_REQUIRED.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.PRECONDITION_REQUIRED.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.TOO_MANY_REQUESTS.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.CONNECTION_CLOSED_WITHOUT_RESPONSE.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.UNAVAILABLE_FOR_LEGAL_REASONS.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.CLIENT_CLOSED_REQUEST.name]: HttpStatusFamily.CLIENT_ERROR,
  [HttpStatus.INTERNAL_SERVER_ERROR]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.NOT_IMPLEMENTED.name]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.BAD_GATEWAY.name]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.SERVICE_UNAVAILABLE.name]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.GATEWAY_TIMEOUT.name]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.HTTP_VERSION_NOT_SUPPORTED.name]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.VARIANT_ALSO_NEGOTIATES.name]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.INSUFFICIENT_STORAGE.name]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.LOOP_DETECTED.name]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.NOT_EXTENDED.name]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.NETWORK_AUTHENTICATION_REQUIRED.name]: HttpStatusFamily.SERVER_ERROR,
  [HttpStatus.NETWORK_CONNECT_TIMEOUT_ERROR.name]: HttpStatusFamily.SERVER_ERROR,
});

export {
  HttpStatusFamily,
  HttpStatusCodesToFamily,
  HttpStatusNamesToFamily,
};
