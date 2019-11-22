package com.alianza.Api.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="client")

public class client {

		@Id
		@Column(name="sharedKey")
		private String sharedKey;
		@Column(name="businessId")
		private String businessId;
		@Column(name="email")
		private String email;
		@Column(name="phone")
		private Long phone;
		
		@Column(name="dateAdded")
		@Temporal(TemporalType.DATE)
		private Date dateAdded;

		

		public String getSharedKey() {
			return sharedKey;
		}



		public void setSharedKey(String sharedKey) {
			this.sharedKey = sharedKey;
		}



		public String getBusinessId() {
			return businessId;
		}



		public void setBusinessId(String businessId) {
			this.businessId = businessId;
		}



		public String getEmail() {
			return email;
		}



		public void setEmail(String email) {
			this.email = email;
		}



		public Long getPhone() {
			return phone;
		}



		public void setPhone(Long phone) {
			this.phone = phone;
		}



		public Date getDateAdded() {
			return dateAdded;
		}



		public void setDateAdded(Date dateAdded) {
			this.dateAdded = dateAdded;
		}


	}
