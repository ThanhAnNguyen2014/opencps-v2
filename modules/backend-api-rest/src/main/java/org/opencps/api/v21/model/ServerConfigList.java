//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2018.08.27 at 05:28:03 PM ICT 
//


package org.opencps.api.v21.model;

import java.util.ArrayList;
import java.util.List;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;


/**
 * <p>Java class for anonymous complex type.
 * 
 * <p>The following schema fragment specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="ServerConfig" maxOccurs="unbounded">
 *           &lt;complexType>
 *             &lt;complexContent>
 *               &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *                 &lt;sequence>
 *                   &lt;element name="govAgencyCode">
 *                     &lt;simpleType>
 *                       &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *                         &lt;maxLength value="255"/>
 *                       &lt;/restriction>
 *                     &lt;/simpleType>
 *                   &lt;/element>
 *                   &lt;element name="serverNo">
 *                     &lt;simpleType>
 *                       &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *                         &lt;maxLength value="255"/>
 *                       &lt;/restriction>
 *                     &lt;/simpleType>
 *                   &lt;/element>
 *                   &lt;element name="serverName">
 *                     &lt;simpleType>
 *                       &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *                         &lt;maxLength value="1000"/>
 *                       &lt;/restriction>
 *                     &lt;/simpleType>
 *                   &lt;/element>
 *                   &lt;element name="protocol">
 *                     &lt;simpleType>
 *                       &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *                         &lt;maxLength value="255"/>
 *                       &lt;/restriction>
 *                     &lt;/simpleType>
 *                   &lt;/element>
 *                   &lt;element name="configs">
 *                     &lt;simpleType>
 *                       &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
 *                         &lt;maxLength value="255"/>
 *                       &lt;/restriction>
 *                     &lt;/simpleType>
 *                   &lt;/element>
 *                 &lt;/sequence>
 *               &lt;/restriction>
 *             &lt;/complexContent>
 *           &lt;/complexType>
 *         &lt;/element>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 * 
 * 
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
    "serverConfig"
})
@XmlRootElement(name = "ServerConfigList")
public class ServerConfigList {

    @XmlElement(name = "ServerConfig", required = true)
    protected List<ServerConfigList.ServerConfig> serverConfig;

    /**
     * Gets the value of the serverConfig property.
     * 
     * <p>
     * This accessor method returns a reference to the live list,
     * not a snapshot. Therefore any modification you make to the
     * returned list will be present inside the JAXB object.
     * This is why there is not a <CODE>set</CODE> method for the serverConfig property.
     * 
     * <p>
     * For example, to add a new item, do as follows:
     * <pre>
     *    getServerConfig().add(newItem);
     * </pre>
     * 
     * 
     * <p>
     * Objects of the following type(s) are allowed in the list
     * {@link ServerConfigList.ServerConfig }
     * 
     * 
     */
    public List<ServerConfigList.ServerConfig> getServerConfig() {
        if (serverConfig == null) {
            serverConfig = new ArrayList<ServerConfigList.ServerConfig>();
        }
        return this.serverConfig;
    }


    /**
     * <p>Java class for anonymous complex type.
     * 
     * <p>The following schema fragment specifies the expected content contained within this class.
     * 
     * <pre>
     * &lt;complexType>
     *   &lt;complexContent>
     *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
     *       &lt;sequence>
     *         &lt;element name="govAgencyCode">
     *           &lt;simpleType>
     *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
     *               &lt;maxLength value="255"/>
     *             &lt;/restriction>
     *           &lt;/simpleType>
     *         &lt;/element>
     *         &lt;element name="serverNo">
     *           &lt;simpleType>
     *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
     *               &lt;maxLength value="255"/>
     *             &lt;/restriction>
     *           &lt;/simpleType>
     *         &lt;/element>
     *         &lt;element name="serverName">
     *           &lt;simpleType>
     *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
     *               &lt;maxLength value="1000"/>
     *             &lt;/restriction>
     *           &lt;/simpleType>
     *         &lt;/element>
     *         &lt;element name="protocol">
     *           &lt;simpleType>
     *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
     *               &lt;maxLength value="255"/>
     *             &lt;/restriction>
     *           &lt;/simpleType>
     *         &lt;/element>
     *         &lt;element name="configs">
     *           &lt;simpleType>
     *             &lt;restriction base="{http://www.w3.org/2001/XMLSchema}string">
     *               &lt;maxLength value="255"/>
     *             &lt;/restriction>
     *           &lt;/simpleType>
     *         &lt;/element>
     *       &lt;/sequence>
     *     &lt;/restriction>
     *   &lt;/complexContent>
     * &lt;/complexType>
     * </pre>
     * 
     * 
     */
    @XmlAccessorType(XmlAccessType.FIELD)
    @XmlType(name = "", propOrder = {
        "govAgencyCode",
        "serverNo",
        "serverName",
        "protocol",
        "configs"
    })
    public static class ServerConfig {

        @XmlElement(required = true)
        protected String govAgencyCode;
        @XmlElement(required = true)
        protected String serverNo;
        @XmlElement(required = true)
        protected String serverName;
        @XmlElement(required = true)
        protected String protocol;
        @XmlElement(required = true)
        protected String configs;

        /**
         * Gets the value of the govAgencyCode property.
         * 
         * @return
         *     possible object is
         *     {@link String }
         *     
         */
        public String getGovAgencyCode() {
            return govAgencyCode;
        }

        /**
         * Sets the value of the govAgencyCode property.
         * 
         * @param value
         *     allowed object is
         *     {@link String }
         *     
         */
        public void setGovAgencyCode(String value) {
            this.govAgencyCode = value;
        }

        /**
         * Gets the value of the serverNo property.
         * 
         * @return
         *     possible object is
         *     {@link String }
         *     
         */
        public String getServerNo() {
            return serverNo;
        }

        /**
         * Sets the value of the serverNo property.
         * 
         * @param value
         *     allowed object is
         *     {@link String }
         *     
         */
        public void setServerNo(String value) {
            this.serverNo = value;
        }

        /**
         * Gets the value of the serverName property.
         * 
         * @return
         *     possible object is
         *     {@link String }
         *     
         */
        public String getServerName() {
            return serverName;
        }

        /**
         * Sets the value of the serverName property.
         * 
         * @param value
         *     allowed object is
         *     {@link String }
         *     
         */
        public void setServerName(String value) {
            this.serverName = value;
        }

        /**
         * Gets the value of the protocol property.
         * 
         * @return
         *     possible object is
         *     {@link String }
         *     
         */
        public String getProtocol() {
            return protocol;
        }

        /**
         * Sets the value of the protocol property.
         * 
         * @param value
         *     allowed object is
         *     {@link String }
         *     
         */
        public void setProtocol(String value) {
            this.protocol = value;
        }

        /**
         * Gets the value of the configs property.
         * 
         * @return
         *     possible object is
         *     {@link String }
         *     
         */
        public String getConfigs() {
            return configs;
        }

        /**
         * Sets the value of the configs property.
         * 
         * @param value
         *     allowed object is
         *     {@link String }
         *     
         */
        public void setConfigs(String value) {
            this.configs = value;
        }

    }

}
