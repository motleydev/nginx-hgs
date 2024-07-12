Type.registerNamespace('webXsiteService');
webXsiteService.ViewService=function() {
webXsiteService.ViewService.initializeBase(this);
this._timeout = 0;
this._userContext = null;
this._succeeded = null;
this._failed = null;
}
webXsiteService.ViewService.prototype={
_get_path:function() {
 var p = this.get_path();
 if (p) return p;
 else return webXsiteService.ViewService._staticInstance.get_path();},
DoWork:function(succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'DoWork',false,{},succeededCallback,failedCallback,userContext); },
SetToSession:function(name,value,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'SetToSession',false,{name:name,value:value},succeededCallback,failedCallback,userContext); },
GetSession:function(name,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetSession',false,{name:name},succeededCallback,failedCallback,userContext); },
GetDomainInfo:function(domaintoCheck,domainNameString,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetDomainInfo',false,{domaintoCheck:domaintoCheck,domainNameString:domainNameString},succeededCallback,failedCallback,userContext); },
GetDomainListInfo:function(domaintoCheck,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'GetDomainListInfo',false,{domaintoCheck:domaintoCheck},succeededCallback,failedCallback,userContext); },
SendFeedback:function(reason,message,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'SendFeedback',false,{reason:reason,message:message},succeededCallback,failedCallback,userContext); },
ChangeCurrentExtranetUserPassword:function(oldPassword,newPassword,newPasswordRepeat,succeededCallback, failedCallback, userContext) {
return this._invoke(this._get_path(), 'ChangeCurrentExtranetUserPassword',false,{oldPassword:oldPassword,newPassword:newPassword,newPasswordRepeat:newPasswordRepeat},succeededCallback,failedCallback,userContext); }}
webXsiteService.ViewService.registerClass('webXsiteService.ViewService',Sys.Net.WebServiceProxy);
webXsiteService.ViewService._staticInstance = new webXsiteService.ViewService();
webXsiteService.ViewService.set_path = function(value) { webXsiteService.ViewService._staticInstance.set_path(value); }
webXsiteService.ViewService.get_path = function() { return webXsiteService.ViewService._staticInstance.get_path(); }
webXsiteService.ViewService.set_timeout = function(value) { webXsiteService.ViewService._staticInstance.set_timeout(value); }
webXsiteService.ViewService.get_timeout = function() { return webXsiteService.ViewService._staticInstance.get_timeout(); }
webXsiteService.ViewService.set_defaultUserContext = function(value) { webXsiteService.ViewService._staticInstance.set_defaultUserContext(value); }
webXsiteService.ViewService.get_defaultUserContext = function() { return webXsiteService.ViewService._staticInstance.get_defaultUserContext(); }
webXsiteService.ViewService.set_defaultSucceededCallback = function(value) { webXsiteService.ViewService._staticInstance.set_defaultSucceededCallback(value); }
webXsiteService.ViewService.get_defaultSucceededCallback = function() { return webXsiteService.ViewService._staticInstance.get_defaultSucceededCallback(); }
webXsiteService.ViewService.set_defaultFailedCallback = function(value) { webXsiteService.ViewService._staticInstance.set_defaultFailedCallback(value); }
webXsiteService.ViewService.get_defaultFailedCallback = function() { return webXsiteService.ViewService._staticInstance.get_defaultFailedCallback(); }
webXsiteService.ViewService.set_enableJsonp = function(value) { webXsiteService.ViewService._staticInstance.set_enableJsonp(value); }
webXsiteService.ViewService.get_enableJsonp = function() { return webXsiteService.ViewService._staticInstance.get_enableJsonp(); }
webXsiteService.ViewService.set_jsonpCallbackParameter = function(value) { webXsiteService.ViewService._staticInstance.set_jsonpCallbackParameter(value); }
webXsiteService.ViewService.get_jsonpCallbackParameter = function() { return webXsiteService.ViewService._staticInstance.get_jsonpCallbackParameter(); }
webXsiteService.ViewService.set_path("http://hofgutstorzeln.de/Service/ViewService.svc");
webXsiteService.ViewService.DoWork= function(onSuccess,onFailed,userContext) {webXsiteService.ViewService._staticInstance.DoWork(onSuccess,onFailed,userContext); }
webXsiteService.ViewService.SetToSession= function(name,value,onSuccess,onFailed,userContext) {webXsiteService.ViewService._staticInstance.SetToSession(name,value,onSuccess,onFailed,userContext); }
webXsiteService.ViewService.GetSession= function(name,onSuccess,onFailed,userContext) {webXsiteService.ViewService._staticInstance.GetSession(name,onSuccess,onFailed,userContext); }
webXsiteService.ViewService.GetDomainInfo= function(domaintoCheck,domainNameString,onSuccess,onFailed,userContext) {webXsiteService.ViewService._staticInstance.GetDomainInfo(domaintoCheck,domainNameString,onSuccess,onFailed,userContext); }
webXsiteService.ViewService.GetDomainListInfo= function(domaintoCheck,onSuccess,onFailed,userContext) {webXsiteService.ViewService._staticInstance.GetDomainListInfo(domaintoCheck,onSuccess,onFailed,userContext); }
webXsiteService.ViewService.SendFeedback= function(reason,message,onSuccess,onFailed,userContext) {webXsiteService.ViewService._staticInstance.SendFeedback(reason,message,onSuccess,onFailed,userContext); }
webXsiteService.ViewService.ChangeCurrentExtranetUserPassword= function(oldPassword,newPassword,newPasswordRepeat,onSuccess,onFailed,userContext) {webXsiteService.ViewService._staticInstance.ChangeCurrentExtranetUserPassword(oldPassword,newPassword,newPasswordRepeat,onSuccess,onFailed,userContext); }
