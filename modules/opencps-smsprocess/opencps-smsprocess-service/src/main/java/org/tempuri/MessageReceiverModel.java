//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2019.06.12 at 05:06:38 PM ICT 
//


package org.tempuri;

import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for messageReceiverModel complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType name="messageReceiverModel">
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;all>
 *         &lt;element name="RequestID" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *         &lt;element name="UserID" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *         &lt;element name="ReceiverID" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *         &lt;element name="ServiceID" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *         &lt;element name="CommandCode" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *         &lt;element name="Info" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *         &lt;element name="ReceiveTime" type="{http://www.w3.org/2001/XMLSchema}string" form="qualified"/>
 *       &lt;/all>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "messageReceiverModel", propOrder = {

})
public class MessageReceiverModel {

    @XmlElement(name = "RequestID", required = true)
    protected String requestID;
    @XmlElement(name = "UserID", required = true)
    protected String userID;
    @XmlElement(name = "ReceiverID", required = true)
    protected String receiverID;
    @XmlElement(name = "ServiceID", required = true)
    protected String serviceID;
    @XmlElement(name = "CommandCode", required = true)
    protected String commandCode;
    @XmlElement(name = "Info", required = true)
    protected String info;
    @XmlElement(name = "ReceiveTime", required = true)
    protected String receiveTime;

    /**
     * Gets the value of the requestID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getRequestID() {
        return requestID;
    }

    /**
     * Sets the value of the requestID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setRequestID(String value) {
        this.requestID = value;
    }

    /**
     * Gets the value of the userID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getUserID() {
        return userID;
    }

    /**
     * Sets the value of the userID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setUserID(String value) {
        this.userID = value;
    }

    /**
     * Gets the value of the receiverID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReceiverID() {
        return receiverID;
    }

    /**
     * Sets the value of the receiverID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReceiverID(String value) {
        this.receiverID = value;
    }

    /**
     * Gets the value of the serviceID property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getServiceID() {
        return serviceID;
    }

    /**
     * Sets the value of the serviceID property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setServiceID(String value) {
        this.serviceID = value;
    }

    /**
     * Gets the value of the commandCode property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getCommandCode() {
        return commandCode;
    }

    /**
     * Sets the value of the commandCode property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setCommandCode(String value) {
        this.commandCode = value;
    }

    /**
     * Gets the value of the info property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getInfo() {
        return info;
    }

    /**
     * Sets the value of the info property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setInfo(String value) {
        this.info = value;
    }

    /**
     * Gets the value of the receiveTime property.
     * 
     * @return
     *     possible object is
     *     {@link String }
     *     
     */
    public String getReceiveTime() {
        return receiveTime;
    }

    /**
     * Sets the value of the receiveTime property.
     * 
     * @param value
     *     allowed object is
     *     {@link String }
     *     
     */
    public void setReceiveTime(String value) {
        this.receiveTime = value;
    }

}
