package com.escola_segura.api.controller;

import com.escola_segura.api.model.entity.Responsavel;
import com.escola_segura.api.model.repositories.ResponsavelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/responsavel")
public class ResponsavelController {

    @Autowired
    private ResponsavelRepository repository;

    @GetMapping
    public List<Responsavel> listarTudo() {
        return repository.findAll();
    }

    @PostMapping
    public Responsavel salvar(@RequestBody Responsavel responsavel) {
        return repository.save(responsavel);
    }

    @DeleteMapping("/{id}")
    @Transactional
    public void remover(@PathVariable Long id) {
        Optional<Responsavel> optional = repository.findById(id);
        if (optional.isPresent()) {
            repository.deleteById(id);
        }
    }

    @PutMapping("/{id}")
    public void atualizar(@PathVariable Long id, @RequestBody Responsavel responsavel) {
        Responsavel responsavelAtualizado  = repository.getOne(id);
        responsavelAtualizado.setNome(responsavel.getNome());
        repository.save(responsavelAtualizado);
    }
}
