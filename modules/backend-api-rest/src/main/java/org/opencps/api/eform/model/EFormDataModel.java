// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2017.09.20 at 05:56:58 PM ICT 
//


package org.opencps.api.eform.model;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "eFormId",
    "createDate",
    "modifiedDate",
    "eFormNo",
    "serviceCode",
    "fileTemplateNo",
    "eFormName",
    "formScriptFileId",
    "formReportFileId",
    "eFormData",
    "email",
    "secret",
    "checkinDate",
    "gateNumber",
    "state"
})
@XmlRootElement(name = "EFormDataModel")
public class EFormDataModel {

	protected Long eFormId;
	protected Long createDate;
	protected Long modifiedDate;
	protected String eFormNo;
	protected String serviceCode;
	protected String fileTemplateNo;
	protected String eFormName;
	protected Long formScriptFileId;
	protected Long formReportFileId;
	protected String eFormData;
	protected String email;
	protected String secret;
	protected String checkinDate;
	protected String gateNumber;
	protected Integer state;

	public Long geteFormId() {
		return eFormId;
	}
	public void seteFormId(Long eFormId) {
		this.eFormId = eFormId;
	}
	public Long getCreateDate() {
		return createDate;
	}
	public void setCreateDate(Long createDate) {
		this.createDate = createDate;
	}
	public Long getModifiedDate() {
		return modifiedDate;
	}
	public void setModifiedDate(Long modifiedDate) {
		this.modifiedDate = modifiedDate;
	}
	public String geteFormNo() {
		return eFormNo;
	}
	public void seteFormNo(String eFormNo) {
		this.eFormNo = eFormNo;
	}
	public String getServiceCode() {
		return serviceCode;
	}
	public void setServiceCode(String serviceCode) {
		this.serviceCode = serviceCode;
	}
	public String getFileTemplateNo() {
		return fileTemplateNo;
	}
	public void setFileTemplateNo(String fileTemplateNo) {
		this.fileTemplateNo = fileTemplateNo;
	}
	public String geteFormName() {
		return eFormName;
	}
	public void seteFormName(String eFormName) {
		this.eFormName = eFormName;
	}
	public Long getFormScriptFileId() {
		return formScriptFileId;
	}
	public void setFormScriptFileId(Long formScriptFileId) {
		this.formScriptFileId = formScriptFileId;
	}
	public Long getFormReportFileId() {
		return formReportFileId;
	}
	public void setFormReportFileId(Long formReportFileId) {
		this.formReportFileId = formReportFileId;
	}
	public String geteFormData() {
		return eFormData;
	}
	public void seteFormData(String eFormData) {
		this.eFormData = eFormData;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSecret() {
		return secret;
	}
	public void setSecret(String secret) {
		this.secret = secret;
	}
	public String getCheckinDate() {
		return checkinDate;
	}
	public void setCheckinDate(String checkinDate) {
		this.checkinDate = checkinDate;
	}
	public String getGateNumber() {
		return gateNumber;
	}
	public void setGateNumber(String gateNumber) {
		this.gateNumber = gateNumber;
	}
	public Integer getState() {
		return state;
	}
	public void setState(Integer state) {
		this.state = state;
	}

}
