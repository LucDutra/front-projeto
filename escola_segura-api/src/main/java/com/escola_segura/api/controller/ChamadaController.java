package com.escola_segura.api.controller;

import com.escola_segura.api.model.entity.Chamada;
import com.escola_segura.api.model.entity.Escola;
import com.escola_segura.api.model.repositories.ChamadaRepository;
import com.escola_segura.api.model.repositories.EscolaRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/chamada")
public class ChamadaController {
  @Autowired
  private ChamadaRepository repository;

  @GetMapping
  public List<Chamada> listarTudo() {
    return repository.findAll();
  }

  @PostMapping
  public Chamada salvar(@RequestBody Chamada chamada) {
    return repository.save(chamada);
  }

}
