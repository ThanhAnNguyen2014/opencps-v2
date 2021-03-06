//
// This file was generated by the JavaTM Architecture for XML Binding(JAXB) Reference Implementation, v2.2.8-b130911.1802 
// See <a href="http://java.sun.com/xml/jaxb">http://java.sun.com/xml/jaxb</a> 
// Any modifications to this file will be lost upon recompilation of the source schema. 
// Generated on: 2017.08.19 at 10:36:38 AM ICT 
//

package org.opencps.api.comment.model;

import com.liferay.petra.string.StringPool;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.FormParam;
import javax.xml.bind.annotation.XmlAccessType;
import javax.xml.bind.annotation.XmlAccessorType;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlType;

/**
 * <p>Java class for anonymous complex type. <p>The following schema fragment
 * specifies the expected content contained within this class.
 * 
 * <pre>
 * &lt;complexType>
 *   &lt;complexContent>
 *     &lt;restriction base="{http://www.w3.org/2001/XMLSchema}anyType">
 *       &lt;sequence>
 *         &lt;element name="className" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="classPK" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="parent" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="content" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fileName" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fileType" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fileSize" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="pings" type="{http://www.w3.org/2001/XMLSchema}anyType" maxOccurs="unbounded" minOccurs="0"/>
 *         &lt;element name="userId" type="{http://www.w3.org/2001/XMLSchema}long" minOccurs="0"/>
 *         &lt;element name="email" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="fullname" type="{http://www.w3.org/2001/XMLSchema}string" minOccurs="0"/>
 *         &lt;element name="upvoteCount" type="{http://www.w3.org/2001/XMLSchema}int" minOccurs="0"/>
 *         &lt;element name="userHasUpvoted" type="{http://www.w3.org/2001/XMLSchema}boolean" minOccurs="0"/>
 *       &lt;/sequence>
 *     &lt;/restriction>
 *   &lt;/complexContent>
 * &lt;/complexType>
 * </pre>
 */
@XmlAccessorType(XmlAccessType.FIELD)
@XmlType(name = "", propOrder = {
	"className", "classPK", "parent", "content", "fileName", "fileType",
	"fileSize", "pings", "userId", "email", "fullname", "upvoteCount",
	"userHasUpvoted", "opinion"
})
@XmlRootElement(name = "CommentInputModel")
public class CommentInputModel {

	@XmlElement(name = "className")
	@DefaultValue(StringPool.BLANK)
	@FormParam(value = "className")
	protected String className;

	@DefaultValue(StringPool.BLANK)
	@FormParam(value = "classPK")
	protected String classPK;

	@DefaultValue("0")
	@FormParam(value = "parent")
	protected Long parent;

	@DefaultValue(StringPool.BLANK)
	@FormParam(value = "content")
	protected String content;

	@DefaultValue(StringPool.BLANK)
	@FormParam(value = "fileName")
	protected String fileName;

	@DefaultValue(StringPool.BLANK)
	@FormParam(value = "fileType")
	protected String fileType;

	@DefaultValue("0")
	@FormParam(value = "fileSize")
	protected Long fileSize;

	@DefaultValue(StringPool.BLANK)
	@FormParam(value = "pings")
	protected String pings;

	@DefaultValue("0")
	@FormParam(value = "userId")
	protected Long userId;

	@DefaultValue(StringPool.BLANK)
	@FormParam(value = "email")
	protected String email;

	@DefaultValue(StringPool.BLANK)
	@FormParam(value = "fullname")
	protected String fullname;

	@DefaultValue("0")
	@FormParam(value = "upvoteCount")
	protected Integer upvoteCount;

	@FormParam(value = "opinion")
	protected Boolean opinion;

	/**
	 * Gets the value of the className property.
	 * 
	 * @return possible object is {@link String }
	 */
	public String getClassName() {

		return className;
	}

	/**
	 * Sets the value of the className property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 */
	public void setClassName(String value) {

		this.className = value;
	}

	/**
	 * Gets the value of the classPK property.
	 * 
	 * @return possible object is {@link String }
	 */
	public String getClassPK() {

		return classPK;
	}

	/**
	 * Sets the value of the classPK property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 */
	public void setClassPK(String value) {

		this.classPK = value;
	}

	/**
	 * Gets the value of the parent property.
	 * 
	 * @return possible object is {@link Long }
	 */
	public Long getParent() {

		return parent;
	}

	/**
	 * Sets the value of the parent property.
	 * 
	 * @param value
	 *            allowed object is {@link Long }
	 */
	public void setParent(Long value) {

		this.parent = value;
	}

	/**
	 * Gets the value of the content property.
	 * 
	 * @return possible object is {@link String }
	 */
	public String getContent() {

		return content;
	}

	/**
	 * Sets the value of the content property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 */
	public void setContent(String value) {

		this.content = value;
	}

	/**
	 * Gets the value of the fileName property.
	 * 
	 * @return possible object is {@link String }
	 */
	public String getFileName() {

		return fileName;
	}

	/**
	 * Sets the value of the fileName property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 */
	public void setFileName(String value) {

		this.fileName = value;
	}

	/**
	 * Gets the value of the fileType property.
	 * 
	 * @return possible object is {@link String }
	 */
	public String getFileType() {

		return fileType;
	}

	/**
	 * Sets the value of the fileType property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 */
	public void setFileType(String value) {

		this.fileType = value;
	}

	/**
	 * Gets the value of the fileSize property.
	 * 
	 * @return possible object is {@link Long }
	 */
	public Long getFileSize() {

		return fileSize;
	}

	/**
	 * Sets the value of the fileSize property.
	 * 
	 * @param value
	 *            allowed object is {@link Long }
	 */
	public void setFileSize(Long value) {

		this.fileSize = value;
	}

	/**
	 * Gets the value of the pings property.
	 * 
	 * @return possible object is {@link String }
	 */
	public String getPings() {

		return this.pings;
	}

	/**
	 * Sets the value of the pings property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 */

	public void setPings(String pings) {

		this.pings = pings;
	}

	/**
	 * Gets the value of the userId property.
	 * 
	 * @return possible object is {@link Long }
	 */
	public Long getUserId() {

		return userId;
	}

	/**
	 * Sets the value of the userId property.
	 * 
	 * @param value
	 *            allowed object is {@link Long }
	 */
	public void setUserId(Long value) {

		this.userId = value;
	}

	/**
	 * Gets the value of the email property.
	 * 
	 * @return possible object is {@link String }
	 */
	public String getEmail() {

		return email;
	}

	/**
	 * Sets the value of the email property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 */
	public void setEmail(String value) {

		this.email = value;
	}

	/**
	 * Gets the value of the fullname property.
	 * 
	 * @return possible object is {@link String }
	 */
	public String getFullname() {

		return fullname;
	}

	/**
	 * Sets the value of the fullname property.
	 * 
	 * @param value
	 *            allowed object is {@link String }
	 */
	public void setFullname(String value) {

		this.fullname = value;
	}

	/**
	 * Gets the value of the upvoteCount property.
	 * 
	 * @return possible object is {@link Integer }
	 */
	public Integer getUpvoteCount() {

		return upvoteCount;
	}

	/**
	 * Sets the value of the upvoteCount property.
	 * 
	 * @param value
	 *            allowed object is {@link Integer }
	 */
	public void setUpvoteCount(Integer value) {

		this.upvoteCount = value;
	}

	public Boolean getOpinion() {
		return opinion;
	}
	
	public void setOpinion(Boolean value) {
		this.opinion = value;
	}
}
