package com.escola_segura.api.controller;

import com.escola_segura.api.model.entity.Deficiencia;
import com.escola_segura.api.model.entity.Turma;
import com.escola_segura.api.model.repositories.DeficienciaRepository;
import com.escola_segura.api.model.repositories.TurmaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@RestController
@RequestMapping("/turma")
public class TurmaController {

  @Autowired
  private TurmaRepository repository;

  @GetMapping
  public List<Turma> listarTudo() {
    return repository.findAll();
  }

  @PostMapping
  public Turma salvar(@RequestBody Turma turma) {
    return repository.save(turma);
  }

  @DeleteMapping("/{id}")
  @Transactional
  public void remover(@PathVariable Long id) {
    Optional<Turma> optional = repository.findById(id);
    if (optional.isPresent()) {
      repository.deleteById(id);
    }
  }

  @PutMapping("/{id}")
  public void atualizar(@PathVariable Long id, @RequestBody Turma turma) {
    Turma turmaAtualizado  = repository.getOne(id);
    turmaAtualizado.setNome(turma.getNome());
    turmaAtualizado.setTurno(turma.getTurno());
    turmaAtualizado.setIdAluno(turma.getIdAluno());
    turmaAtualizado.setIdMateria(turma.getIdMateria());
    repository.save(turmaAtualizado);
  }
}
