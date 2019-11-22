package com.alianza.Api.services;

import java.util.List;

import com.alianza.Api.entities.client;

public interface IClientServices {
	
	public List<client> findAll();
	
	public void save(client cliente);
	
	public client findById(String id);
	
	public void delete(client cliente);

}
