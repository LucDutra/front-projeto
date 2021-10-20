package com.escola_segura.api.controller;

import com.escola_segura.api.model.entity.Deficiencia;
import com.escola_segura.api.model.entity.EscolaUnica;
import com.escola_segura.api.model.repositories.EscolaUnicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/escola_unica")
public class EscolaUnicaController {
    @Autowired
    private EscolaUnicaRepository repository;

    @GetMapping
    public List<EscolaUnica> listarTudo() {
        return repository.findAll();
    }

    @PostMapping
    public EscolaUnica salvar(@RequestBody EscolaUnica escolaUnica) {
        return repository.save(escolaUnica);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void remover(@PathVariable Long id) {
        Optional<EscolaUnica> optional = repository.findById(id);
        if (optional.isPresent()) {
            repository.deleteById(id);
        }
    }

  @PutMapping("/{id}")
  public void atualizar(@PathVariable Long id, @RequestBody EscolaUnica escolaUnica) {
    EscolaUnica escolaUnicaAtualizado  = repository.getOne(id);
    escolaUnicaAtualizado.setEscola(escolaUnica.getEscola());
    escolaUnicaAtualizado.setAluno(escolaUnica.getAluno());
    escolaUnicaAtualizado.setProfessor(escolaUnica.getProfessor());

    repository.save(escolaUnicaAtualizado);
  }

}
