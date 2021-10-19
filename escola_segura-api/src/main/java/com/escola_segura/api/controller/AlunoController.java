package com.escola_segura.api.controller;

import com.escola_segura.api.model.entity.Aluno;
import com.escola_segura.api.model.repositories.AlunoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/aluno")
public class AlunoController {

    @Autowired
    private AlunoRepository repository;

    @GetMapping
    public List<Aluno> listarTudo() {
        return repository.findAll();
    }

    @PostMapping
    public Aluno salvar(@RequestBody Aluno aluno) {
        return repository.save(aluno);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void remover(@PathVariable Long id) {
        Optional<Aluno> optional = repository.findById(id);
        if (optional.isPresent()) {
            repository.deleteById(id);
        }
    }

    @PutMapping("/{id}")
    public void atualizar(@PathVariable Long id, @RequestBody Aluno aluno) {
        Aluno alunoAtualizado  = repository.getOne(id);
        alunoAtualizado.setNome(aluno.getNome());
        repository.save(alunoAtualizado);
    }
}
