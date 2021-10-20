package com.escola_segura.api.controller;

import com.escola_segura.api.model.entity.Deficiencia;
import com.escola_segura.api.model.entity.Materia;
import com.escola_segura.api.model.repositories.DeficienciaRepository;
import com.escola_segura.api.model.repositories.MateriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/materia")
public class MateriaController {
  @Autowired
  private MateriaRepository repository;

  @GetMapping
  public List<Materia> listarTudo() {
    return repository.findAll();
  }

  @PostMapping
  public Materia salvar(@RequestBody Materia materia) {
    return repository.save(materia);
  }

  @DeleteMapping("/{id}")
  @Transactional
  public void remover(@PathVariable Long id) {
    Optional<Materia> optional = repository.findById(id);
    if (optional.isPresent()) {
      repository.deleteById(id);
    }
  }

  @PutMapping("/{id}")
  public void atualizar(@PathVariable Long id, @RequestBody Materia materia) {
    Materia materiaAtualizada  = repository.getOne(id);
    materiaAtualizada.setNome(materia.getNome());
    repository.save(materiaAtualizada);
  }
}
