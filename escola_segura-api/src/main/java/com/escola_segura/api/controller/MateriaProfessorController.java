package com.escola_segura.api.controller;

import com.escola_segura.api.model.entity.Deficiencia;
import com.escola_segura.api.model.entity.MateriaProfessor;
import com.escola_segura.api.model.repositories.DeficienciaRepository;
import com.escola_segura.api.model.repositories.MateriaProfessorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/materia-professor")
public class MateriaProfessorController {
  @Autowired
  private MateriaProfessorRepository repository;

  @GetMapping
  public List<MateriaProfessor> listarTudo() {
    return repository.findAll();
  }

  @PostMapping
  public MateriaProfessor salvar(@RequestBody MateriaProfessor materiaProfessor) {
    return repository.save(materiaProfessor);
  }

  @DeleteMapping("/{id}")
  @Transactional
  public void remover(@PathVariable Long id) {
    Optional<MateriaProfessor> optional = repository.findById(id);
    if (optional.isPresent()) {
      repository.deleteById(id);
    }
  }

  @PutMapping("/{id}")
  public void atualizar(@PathVariable Long id, @RequestBody MateriaProfessor materiaProfessor) {
    MateriaProfessor materiaProfessorAtualizado  = repository.getOne(id);
    materiaProfessorAtualizado.setProfessor(materiaProfessor.getProfessor());
    materiaProfessorAtualizado.setMateria(materiaProfessor.getMateria());
    repository.save(materiaProfessorAtualizado);
  }
}
