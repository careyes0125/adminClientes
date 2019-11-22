package com.alianza.Api.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.alianza.Api.entities.client;

@Repository
public interface IClientRepository extends CrudRepository<client, String>{

}
