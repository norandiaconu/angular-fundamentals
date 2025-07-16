import {
  Observable,
  Subscriber,
  map
} from "./chunk-CKONHHS2.js";

// node_modules/rxjs/_esm2015/internal/util/root.js
var __window = typeof window !== "undefined" && window;
var __self = typeof self !== "undefined" && typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && self;
var __global = typeof global !== "undefined" && global;
var _root = __window || __global || __self;
(function() {
  if (!_root) {
    throw new Error("RxJS could not find any global context (window, self, global)");
  }
})();

// node_modules/rxjs/_esm2015/internal/observable/dom/AjaxObservable.js
function getCORSRequest() {
  if (_root.XMLHttpRequest) {
    return new _root.XMLHttpRequest();
  } else if (!!_root.XDomainRequest) {
    return new _root.XDomainRequest();
  } else {
    throw new Error("CORS is not supported by your browser");
  }
}
function getXMLHttpRequest() {
  if (_root.XMLHttpRequest) {
    return new _root.XMLHttpRequest();
  } else {
    let progId;
    try {
      const progIds = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"];
      for (let i = 0; i < 3; i++) {
        try {
          progId = progIds[i];
          if (new _root.ActiveXObject(progId)) {
            break;
          }
        } catch (e) {
        }
      }
      return new _root.ActiveXObject(progId);
    } catch (e) {
      throw new Error("XMLHttpRequest is not supported by your browser");
    }
  }
}
function ajaxGet(url, headers = null) {
  return new AjaxObservable({
    method: "GET",
    url,
    headers
  });
}
function ajaxPost(url, body, headers) {
  return new AjaxObservable({
    method: "POST",
    url,
    body,
    headers
  });
}
function ajaxDelete(url, headers) {
  return new AjaxObservable({
    method: "DELETE",
    url,
    headers
  });
}
function ajaxPut(url, body, headers) {
  return new AjaxObservable({
    method: "PUT",
    url,
    body,
    headers
  });
}
function ajaxPatch(url, body, headers) {
  return new AjaxObservable({
    method: "PATCH",
    url,
    body,
    headers
  });
}
var mapResponse = map((x, index) => x.response);
function ajaxGetJSON(url, headers) {
  return mapResponse(new AjaxObservable({
    method: "GET",
    url,
    responseType: "json",
    headers
  }));
}
var AjaxObservable = class extends Observable {
  constructor(urlOrRequest) {
    super();
    const request = {
      async: true,
      createXHR: function() {
        return this.crossDomain ? getCORSRequest() : getXMLHttpRequest();
      },
      crossDomain: true,
      withCredentials: false,
      headers: {},
      method: "GET",
      responseType: "json",
      timeout: 0
    };
    if (typeof urlOrRequest === "string") {
      request.url = urlOrRequest;
    } else {
      for (const prop in urlOrRequest) {
        if (urlOrRequest.hasOwnProperty(prop)) {
          request[prop] = urlOrRequest[prop];
        }
      }
    }
    this.request = request;
  }
  _subscribe(subscriber) {
    return new AjaxSubscriber(subscriber, this.request);
  }
};
AjaxObservable.create = (() => {
  const create = (urlOrRequest) => {
    return new AjaxObservable(urlOrRequest);
  };
  create.get = ajaxGet;
  create.post = ajaxPost;
  create.delete = ajaxDelete;
  create.put = ajaxPut;
  create.patch = ajaxPatch;
  create.getJSON = ajaxGetJSON;
  return create;
})();
var AjaxSubscriber = class extends Subscriber {
  constructor(destination, request) {
    super(destination);
    this.request = request;
    this.done = false;
    const headers = request.headers = request.headers || {};
    if (!request.crossDomain && !this.getHeader(headers, "X-Requested-With")) {
      headers["X-Requested-With"] = "XMLHttpRequest";
    }
    let contentTypeHeader = this.getHeader(headers, "Content-Type");
    if (!contentTypeHeader && !(_root.FormData && request.body instanceof _root.FormData) && typeof request.body !== "undefined") {
      headers["Content-Type"] = "application/x-www-form-urlencoded; charset=UTF-8";
    }
    request.body = this.serializeBody(request.body, this.getHeader(request.headers, "Content-Type"));
    this.send();
  }
  next(e) {
    this.done = true;
    const {
      xhr,
      request,
      destination
    } = this;
    let result;
    try {
      result = new AjaxResponse(e, xhr, request);
    } catch (err) {
      return destination.error(err);
    }
    destination.next(result);
  }
  send() {
    const {
      request,
      request: {
        user,
        method,
        url,
        async,
        password,
        headers,
        body
      }
    } = this;
    try {
      const xhr = this.xhr = request.createXHR();
      this.setupEvents(xhr, request);
      if (user) {
        xhr.open(method, url, async, user, password);
      } else {
        xhr.open(method, url, async);
      }
      if (async) {
        xhr.timeout = request.timeout;
        xhr.responseType = request.responseType;
      }
      if ("withCredentials" in xhr) {
        xhr.withCredentials = !!request.withCredentials;
      }
      this.setHeaders(xhr, headers);
      if (body) {
        xhr.send(body);
      } else {
        xhr.send();
      }
    } catch (err) {
      this.error(err);
    }
  }
  serializeBody(body, contentType) {
    if (!body || typeof body === "string") {
      return body;
    } else if (_root.FormData && body instanceof _root.FormData) {
      return body;
    }
    if (contentType) {
      const splitIndex = contentType.indexOf(";");
      if (splitIndex !== -1) {
        contentType = contentType.substring(0, splitIndex);
      }
    }
    switch (contentType) {
      case "application/x-www-form-urlencoded":
        return Object.keys(body).map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(body[key])}`).join("&");
      case "application/json":
        return JSON.stringify(body);
      default:
        return body;
    }
  }
  setHeaders(xhr, headers) {
    for (let key in headers) {
      if (headers.hasOwnProperty(key)) {
        xhr.setRequestHeader(key, headers[key]);
      }
    }
  }
  getHeader(headers, headerName) {
    for (let key in headers) {
      if (key.toLowerCase() === headerName.toLowerCase()) {
        return headers[key];
      }
    }
    return void 0;
  }
  setupEvents(xhr, request) {
    const progressSubscriber = request.progressSubscriber;
    function xhrTimeout(e) {
      const {
        subscriber,
        progressSubscriber: progressSubscriber2,
        request: request2
      } = xhrTimeout;
      if (progressSubscriber2) {
        progressSubscriber2.error(e);
      }
      let error;
      try {
        error = new AjaxTimeoutError(this, request2);
      } catch (err) {
        error = err;
      }
      subscriber.error(error);
    }
    xhr.ontimeout = xhrTimeout;
    xhrTimeout.request = request;
    xhrTimeout.subscriber = this;
    xhrTimeout.progressSubscriber = progressSubscriber;
    if (xhr.upload && "withCredentials" in xhr) {
      if (progressSubscriber) {
        let xhrProgress;
        xhrProgress = function(e) {
          const {
            progressSubscriber: progressSubscriber2
          } = xhrProgress;
          progressSubscriber2.next(e);
        };
        if (_root.XDomainRequest) {
          xhr.onprogress = xhrProgress;
        } else {
          xhr.upload.onprogress = xhrProgress;
        }
        xhrProgress.progressSubscriber = progressSubscriber;
      }
      let xhrError;
      xhrError = function(e) {
        const {
          progressSubscriber: progressSubscriber2,
          subscriber,
          request: request2
        } = xhrError;
        if (progressSubscriber2) {
          progressSubscriber2.error(e);
        }
        let error;
        try {
          error = new AjaxError("ajax error", this, request2);
        } catch (err) {
          error = err;
        }
        subscriber.error(error);
      };
      xhr.onerror = xhrError;
      xhrError.request = request;
      xhrError.subscriber = this;
      xhrError.progressSubscriber = progressSubscriber;
    }
    function xhrReadyStateChange(e) {
      return;
    }
    xhr.onreadystatechange = xhrReadyStateChange;
    xhrReadyStateChange.subscriber = this;
    xhrReadyStateChange.progressSubscriber = progressSubscriber;
    xhrReadyStateChange.request = request;
    function xhrLoad(e) {
      const {
        subscriber,
        progressSubscriber: progressSubscriber2,
        request: request2
      } = xhrLoad;
      if (this.readyState === 4) {
        let status = this.status === 1223 ? 204 : this.status;
        let response = this.responseType === "text" ? this.response || this.responseText : this.response;
        if (status === 0) {
          status = response ? 200 : 0;
        }
        if (status < 400) {
          if (progressSubscriber2) {
            progressSubscriber2.complete();
          }
          subscriber.next(e);
          subscriber.complete();
        } else {
          if (progressSubscriber2) {
            progressSubscriber2.error(e);
          }
          let error;
          try {
            error = new AjaxError("ajax error " + status, this, request2);
          } catch (err) {
            error = err;
          }
          subscriber.error(error);
        }
      }
    }
    xhr.onload = xhrLoad;
    xhrLoad.subscriber = this;
    xhrLoad.progressSubscriber = progressSubscriber;
    xhrLoad.request = request;
  }
  unsubscribe() {
    const {
      done,
      xhr
    } = this;
    if (!done && xhr && xhr.readyState !== 4 && typeof xhr.abort === "function") {
      xhr.abort();
    }
    super.unsubscribe();
  }
};
var AjaxResponse = class {
  constructor(originalEvent, xhr, request) {
    this.originalEvent = originalEvent;
    this.xhr = xhr;
    this.request = request;
    this.status = xhr.status;
    this.responseType = xhr.responseType || request.responseType;
    this.response = parseXhrResponse(this.responseType, xhr);
  }
};
var AjaxErrorImpl = (() => {
  function AjaxErrorImpl2(message, xhr, request) {
    Error.call(this);
    this.message = message;
    this.name = "AjaxError";
    this.xhr = xhr;
    this.request = request;
    this.status = xhr.status;
    this.responseType = xhr.responseType || request.responseType;
    this.response = parseXhrResponse(this.responseType, xhr);
    return this;
  }
  AjaxErrorImpl2.prototype = Object.create(Error.prototype);
  return AjaxErrorImpl2;
})();
var AjaxError = AjaxErrorImpl;
function parseJson(xhr) {
  if ("response" in xhr) {
    return xhr.responseType ? xhr.response : JSON.parse(xhr.response || xhr.responseText || "null");
  } else {
    return JSON.parse(xhr.responseText || "null");
  }
}
function parseXhrResponse(responseType, xhr) {
  switch (responseType) {
    case "json":
      return parseJson(xhr);
    case "xml":
      return xhr.responseXML;
    case "text":
    default:
      return "response" in xhr ? xhr.response : xhr.responseText;
  }
}
function AjaxTimeoutErrorImpl(xhr, request) {
  AjaxError.call(this, "ajax timeout", xhr, request);
  this.name = "AjaxTimeoutError";
  return this;
}
var AjaxTimeoutError = AjaxTimeoutErrorImpl;

// node_modules/rxjs/_esm2015/internal/observable/dom/ajax.js
var ajax = (() => AjaxObservable.create)();

export {
  ajax
};
