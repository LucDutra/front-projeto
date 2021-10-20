package com.escola_segura.api.controller;

import com.escola_segura.api.model.entity.Aluno;
import com.escola_segura.api.model.entity.Escola;
import com.escola_segura.api.model.repositories.AlunoRepository;
import com.escola_segura.api.model.repositories.EscolaRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/escola")
public class EscolaController {

  @Autowired
  private EscolaRespository repository;

  @GetMapping
  public List<Escola> listarTudo() {
    return repository.findAll();
  }

  @PostMapping
  public Escola salvar(@RequestBody Escola escola) {
    return repository.save(escola);
  }

  @DeleteMapping("/{id}")
  @Transactional
  public void remover(@PathVariable Long id) {
    Optional<Escola> optional = repository.findById(id);
    if (optional.isPresent()) {
      repository.deleteById(id);
    }
  }

  @PutMapping("/{id}")
  public void atualizar(@PathVariable Long id, @RequestBody Escola escola) {
    Escola escolaAtualizado = repository.getOne(id);
    escolaAtualizado.setNome(escola.getNome());
    escolaAtualizado.setCidade(escola.getCidade());
    escolaAtualizado.setEndereco(escola.getEndereco());
    escolaAtualizado.setTelefone(escola.getTelefone());
    escolaAtualizado.setUf(escola.getUf());
    escolaAtualizado.setCnpj(escola.getCnpj());

    repository.save(escolaAtualizado);
  }
}
