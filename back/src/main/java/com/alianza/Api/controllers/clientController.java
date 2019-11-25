package com.alianza.Api.controllers;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.alianza.Api.dtos.clientDto;
import com.alianza.Api.entities.client;
import com.alianza.Api.services.ClientServiceImpl;



@CrossOrigin(origins = { "*" })
@RestController
@RequestMapping("/api")
public class clientController {
	
	@Autowired
	private ClientServiceImpl clientService;

	ModelMapper modelMapper = new ModelMapper();
	
	@GetMapping("/clientes")
	public  clientDto[] index() {
		return modelMapper.map(clientService.findAll(),clientDto[].class);
	}

	@GetMapping("/clientes/{id}")
	public ResponseEntity<clientDto> show(@PathVariable String id) {
		return ResponseEntity.ok(modelMapper.map(this.clientService.findById(id), clientDto.class));
	}

	@PostMapping("/clientes")
	@ResponseStatus(HttpStatus.CREATED)
	public clientDto create(@RequestBody clientDto clienteDto) {
		this.clientService.save(modelMapper.map(clienteDto, client.class));
		return clienteDto;
	}

	@DeleteMapping("/clientes/{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void delete(@PathVariable String id) {
		client currentCliente = this.clientService.findById(id);
		this.clientService.delete(currentCliente);
	}
	
	

}
