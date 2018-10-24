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

package org.opencps.dossiermgt.model;

import aQute.bnd.annotation.ProviderType;

import com.liferay.expando.kernel.model.ExpandoBridge;

import com.liferay.portal.kernel.bean.AutoEscape;
import com.liferay.portal.kernel.model.BaseModel;
import com.liferay.portal.kernel.model.CacheModel;
import com.liferay.portal.kernel.service.ServiceContext;

import org.opencps.dossiermgt.service.persistence.ProcessStepRolePK;

import java.io.Serializable;

/**
 * The base model interface for the ProcessStepRole service. Represents a row in the &quot;opencps_processsteprole&quot; database table, with each column mapped to a property of this class.
 *
 * <p>
 * This interface and its corresponding implementation {@link org.opencps.dossiermgt.model.impl.ProcessStepRoleModelImpl} exist only as a container for the default property accessors generated by ServiceBuilder. Helper methods and all application logic should be put in {@link org.opencps.dossiermgt.model.impl.ProcessStepRoleImpl}.
 * </p>
 *
 * @author huymq
 * @see ProcessStepRole
 * @see org.opencps.dossiermgt.model.impl.ProcessStepRoleImpl
 * @see org.opencps.dossiermgt.model.impl.ProcessStepRoleModelImpl
 * @generated
 */
@ProviderType
public interface ProcessStepRoleModel extends BaseModel<ProcessStepRole> {
	/*
	 * NOTE FOR DEVELOPERS:
	 *
	 * Never modify or reference this interface directly. All methods that expect a process step role model instance should use the {@link ProcessStepRole} interface instead.
	 */

	/**
	 * Returns the primary key of this process step role.
	 *
	 * @return the primary key of this process step role
	 */
	public ProcessStepRolePK getPrimaryKey();

	/**
	 * Sets the primary key of this process step role.
	 *
	 * @param primaryKey the primary key of this process step role
	 */
	public void setPrimaryKey(ProcessStepRolePK primaryKey);

	/**
	 * Returns the uuid of this process step role.
	 *
	 * @return the uuid of this process step role
	 */
	@AutoEscape
	public String getUuid();

	/**
	 * Sets the uuid of this process step role.
	 *
	 * @param uuid the uuid of this process step role
	 */
	public void setUuid(String uuid);

	/**
	 * Returns the process step ID of this process step role.
	 *
	 * @return the process step ID of this process step role
	 */
	public long getProcessStepId();

	/**
	 * Sets the process step ID of this process step role.
	 *
	 * @param processStepId the process step ID of this process step role
	 */
	public void setProcessStepId(long processStepId);

	/**
	 * Returns the role ID of this process step role.
	 *
	 * @return the role ID of this process step role
	 */
	public long getRoleId();

	/**
	 * Sets the role ID of this process step role.
	 *
	 * @param roleId the role ID of this process step role
	 */
	public void setRoleId(long roleId);

	/**
	 * Returns the role code of this process step role.
	 *
	 * @return the role code of this process step role
	 */
	@AutoEscape
	public String getRoleCode();

	/**
	 * Sets the role code of this process step role.
	 *
	 * @param roleCode the role code of this process step role
	 */
	public void setRoleCode(String roleCode);

	/**
	 * Returns the role name of this process step role.
	 *
	 * @return the role name of this process step role
	 */
	@AutoEscape
	public String getRoleName();

	/**
	 * Sets the role name of this process step role.
	 *
	 * @param roleName the role name of this process step role
	 */
	public void setRoleName(String roleName);

	/**
	 * Returns the moderator of this process step role.
	 *
	 * @return the moderator of this process step role
	 */
	public boolean getModerator();

	/**
	 * Returns <code>true</code> if this process step role is moderator.
	 *
	 * @return <code>true</code> if this process step role is moderator; <code>false</code> otherwise
	 */
	public boolean isModerator();

	/**
	 * Sets whether this process step role is moderator.
	 *
	 * @param moderator the moderator of this process step role
	 */
	public void setModerator(boolean moderator);

	/**
	 * Returns the condition of this process step role.
	 *
	 * @return the condition of this process step role
	 */
	@AutoEscape
	public String getCondition();

	/**
	 * Sets the condition of this process step role.
	 *
	 * @param condition the condition of this process step role
	 */
	public void setCondition(String condition);

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
	public int compareTo(ProcessStepRole processStepRole);

	@Override
	public int hashCode();

	@Override
	public CacheModel<ProcessStepRole> toCacheModel();

	@Override
	public ProcessStepRole toEscapedModel();

	@Override
	public ProcessStepRole toUnescapedModel();

	@Override
	public String toString();

	@Override
	public String toXmlString();
}