package com.escola_segura.api.controller;

import com.escola_segura.api.model.entity.Deficiencia;
import com.escola_segura.api.model.entity.Professor;
import com.escola_segura.api.model.repositories.DeficienciaRepository;
import com.escola_segura.api.model.repositories.ProfessorRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/professor")
public class ProfessorController {
  @Autowired
  private ProfessorRespository repository;

  @GetMapping
  public List<Professor> listarTudo() {
    return repository.findAll();
  }

  @PostMapping
  public Professor salvar(@RequestBody Professor professor) {
    return repository.save(professor);
  }

  @DeleteMapping("/{id}")
  @Transactional
  public void remover(@PathVariable Long id) {
    Optional<Professor> optional = repository.findById(id);
    if (optional.isPresent()) {
      repository.deleteById(id);
    }
  }

  @PutMapping("/{id}")
  public void atualizar(@PathVariable Long id, @RequestBody Professor professor) {
    Professor professorAtualizado  = repository.getOne(id);
    professorAtualizado.setNome(professor.getNome());
    repository.save(professorAtualizado);
  }
}
