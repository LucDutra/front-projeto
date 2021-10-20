package com.escola_segura.api.controller;

import com.escola_segura.api.model.entity.Deficiencia;
import com.escola_segura.api.model.entity.Escola;
import com.escola_segura.api.model.repositories.DeficienciaRepository;
import com.escola_segura.api.model.repositories.EscolaRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/deficiencia")
public class DeficienciaController {
  @Autowired
  private DeficienciaRepository repository;

  @GetMapping
  public List<Deficiencia> listarTudo() {
    return repository.findAll();
  }

  @PostMapping
  public Deficiencia salvar(@RequestBody Deficiencia deficiencia) {
    return repository.save(deficiencia);
  }

  @DeleteMapping("/{id}")
  @Transactional
  public void remover(@PathVariable Long id) {
    Optional<Deficiencia> optional = repository.findById(id);
    if (optional.isPresent()) {
      repository.deleteById(id);
    }
  }

  @PutMapping("/{id}")
  public void atualizar(@PathVariable Long id, @RequestBody Deficiencia deficiencia) {
    Deficiencia deficienciaAtualizado  = repository.getOne(id);
    deficienciaAtualizado.setNome(deficiencia.getNome());
    repository.save(deficienciaAtualizado);
  }
}
