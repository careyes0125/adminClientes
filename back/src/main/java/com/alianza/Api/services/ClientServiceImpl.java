package com.alianza.Api.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alianza.Api.Repositories.IClientRepository;
import com.alianza.Api.entities.client;


@Service
public class ClientServiceImpl implements IClientServices {
	
	@Autowired
	private IClientRepository clientRepository;

	@Override
	@Transactional(readOnly = true)
	public List<client> findAll() {
		return (List<client>) clientRepository.findAll();
	}

	@Override
	@Transactional
	public void save(client cliente) {
		clientRepository.save(cliente);

	}

	@Override
	@Transactional(readOnly = true)
	public client findById(String id) {
		return clientRepository.findById(id).orElse(null);
	}

	@Override
	public void delete(client cliente) {
		clientRepository.delete(cliente);

	}

}
