/**
 * Copyright (c) 2000-present Liferay, Inc. All rights reserved.
 *
 * This library is free software; you can redistribute it and/or modify it under
 * the terms of the GNU Lesser General Public License as published by the Free
 * Software Foundation; either version 2.1 of the License, or (at your option)
 * any later version.
 *
 * This library is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE. See the GNU Lesser General Public License for more
 * details.
 */

package org.opencps.communication.model;

import aQute.bnd.annotation.ProviderType;

import com.liferay.expando.kernel.model.ExpandoBridge;

import com.liferay.portal.kernel.bean.AutoEscape;
import com.liferay.portal.kernel.model.BaseModel;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.model.GroupedModel;
import com.liferay.portal.kernel.model.ShardedModel;
import com.liferay.portal.kernel.service.ServiceContext;

import java.io.Serializable;

import java.util.Date;

/**
 * The base model interface for the ServerConfig service. Represents a row in the &quot;opencps_serverconfig&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This interface and its corresponding implementation {@link org.opencps.communication.model.impl.ServerConfigModelImpl} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link org.opencps.communication.model.impl.ServerConfigImpl}.
 * </p>
 *
 * @author khoavd
 * @see ServerConfig
 * @see org.opencps.communication.model.impl.ServerConfigImpl
 * @see org.opencps.communication.model.impl.ServerConfigModelImpl
 * @generated
 */
@ProviderType
public interface ServerConfigModel extends BaseModel<ServerConfig>, GroupedModel,
	ShardedModel {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this interface directly. All methods that expect a server config model instance should use the {@link ServerConfig} interface instead.
	 */

	/**
	 * Returns the primary key of this server config.
	 *
	 * @return the primary key of this server config
	 */
	public long getPrimaryKey();

	/**
	 * Sets the primary key of this server config.
	 *
	 * @param primaryKey the primary key of this server config
	 */
	public void setPrimaryKey(long primaryKey);

	/**
	 * Returns the server config ID of this server config.
	 *
	 * @return the server config ID of this server config
	 */
	public long getServerConfigId();

	/**
	 * Sets the server config ID of this server config.
	 *
	 * @param serverConfigId the server config ID of this server config
	 */
	public void setServerConfigId(long serverConfigId);

	/**
	 * Returns the group ID of this server config.
	 *
	 * @return the group ID of this server config
	 */
	@Override
	public long getGroupId();

	/**
	 * Sets the group ID of this server config.
	 *
	 * @param groupId the group ID of this server config
	 */
	@Override
	public void setGroupId(long groupId);

	/**
	 * Returns the company ID of this server config.
	 *
	 * @return the company ID of this server config
	 */
	@Override
	public long getCompanyId();

	/**
	 * Sets the company ID of this server config.
	 *
	 * @param companyId the company ID of this server config
	 */
	@Override
	public void setCompanyId(long companyId);

	/**
	 * Returns the user ID of this server config.
	 *
	 * @return the user ID of this server config
	 */
	@Override
	public long getUserId();

	/**
	 * Sets the user ID of this server config.
	 *
	 * @param userId the user ID of this server config
	 */
	@Override
	public void setUserId(long userId);

	/**
	 * Returns the user uuid of this server config.
	 *
	 * @return the user uuid of this server config
	 */
	@Override
	public String getUserUuid();

	/**
	 * Sets the user uuid of this server config.
	 *
	 * @param userUuid the user uuid of this server config
	 */
	@Override
	public void setUserUuid(String userUuid);

	/**
	 * Returns the user name of this server config.
	 *
	 * @return the user name of this server config
	 */
	@AutoEscape
	@Override
	public String getUserName();

	/**
	 * Sets the user name of this server config.
	 *
	 * @param userName the user name of this server config
	 */
	@Override
	public void setUserName(String userName);

	/**
	 * Returns the create date of this server config.
	 *
	 * @return the create date of this server config
	 */
	@Override
	public Date getCreateDate();

	/**
	 * Sets the create date of this server config.
	 *
	 * @param createDate the create date of this server config
	 */
	@Override
	public void setCreateDate(Date createDate);

	/**
	 * Returns the modified date of this server config.
	 *
	 * @return the modified date of this server config
	 */
	@Override
	public Date getModifiedDate();

	/**
	 * Sets the modified date of this server config.
	 *
	 * @param modifiedDate the modified date of this server config
	 */
	@Override
	public void setModifiedDate(Date modifiedDate);

	/**
	 * Returns the gov agency code of this server config.
	 *
	 * @return the gov agency code of this server config
	 */
	@AutoEscape
	public String getGovAgencyCode();

	/**
	 * Sets the gov agency code of this server config.
	 *
	 * @param govAgencyCode the gov agency code of this server config
	 */
	public void setGovAgencyCode(String govAgencyCode);

	/**
	 * Returns the server no of this server config.
	 *
	 * @return the server no of this server config
	 */
	@AutoEscape
	public String getServerNo();

	/**
	 * Sets the server no of this server config.
	 *
	 * @param serverNo the server no of this server config
	 */
	public void setServerNo(String serverNo);

	/**
	 * Returns the server name of this server config.
	 *
	 * @return the server name of this server config
	 */
	@AutoEscape
	public String getServerName();

	/**
	 * Sets the server name of this server config.
	 *
	 * @param serverName the server name of this server config
	 */
	public void setServerName(String serverName);

	/**
	 * Returns the protocol of this server config.
	 *
	 * @return the protocol of this server config
	 */
	@AutoEscape
	public String getProtocol();

	/**
	 * Sets the protocol of this server config.
	 *
	 * @param protocol the protocol of this server config
	 */
	public void setProtocol(String protocol);

	/**
	 * Returns the configs of this server config.
	 *
	 * @return the configs of this server config
	 */
	@AutoEscape
	public String getConfigs();

	/**
	 * Sets the configs of this server config.
	 *
	 * @param configs the configs of this server config
	 */
	public void setConfigs(String configs);

	/**
	 * Returns the last sync of this server config.
	 *
	 * @return the last sync of this server config
	 */
	public Date getLastSync();

	/**
	 * Sets the last sync of this server config.
	 *
	 * @param lastSync the last sync of this server config
	 */
	public void setLastSync(Date lastSync);

	@Override
	public boolean isNew();

	@Override
	public void setNew(boolean n);

	@Override
	public boolean isCachedModel();

	@Override
	public void setCachedModel(boolean cachedModel);

	@Override
	public boolean isEscapedModel();

	@Override
	public Serializable getPrimaryKeyObj();

	@Override
	public void setPrimaryKeyObj(Serializable primaryKeyObj);

	@Override
	public ExpandoBridge getExpandoBridge();

	@Override
	public void setExpandoBridgeAttributes(BaseModel<?> baseModel);

	@Override
	public void setExpandoBridgeAttributes(ExpandoBridge expandoBridge);

	@Override
	public void setExpandoBridgeAttributes(ServiceContext serviceContext);

	@Override
	public Object clone();

	@Override
	public int compareTo(ServerConfig serverConfig);

	@Override
	public int hashCode();

	@Override
	public CacheModel<ServerConfig> toCacheModel();

	@Override
	public ServerConfig toEscapedModel();

	@Override
	public ServerConfig toUnescapedModel();

	@Override
	public String toString();

	@Override
	public String toXmlString();
}