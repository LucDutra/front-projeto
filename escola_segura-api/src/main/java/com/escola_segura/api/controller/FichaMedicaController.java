package com.escola_segura.api.controller;

import com.escola_segura.api.model.entity.Deficiencia;
import com.escola_segura.api.model.entity.FichaMedica;
import com.escola_segura.api.model.repositories.DeficienciaRepository;
import com.escola_segura.api.model.repositories.FichaMedicaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
@RestController
  @RequestMapping("/ficha-medica")
public class FichaMedicaController {
  @Autowired
  private FichaMedicaRepository repository;

  @GetMapping
  public List<FichaMedica> listarTudo() {
    return repository.findAll();
  }

  @PostMapping
  public FichaMedica salvar(@RequestBody FichaMedica fichaMedica) {
    return repository.save(fichaMedica);
  }

  @DeleteMapping("/{id}")
  @Transactional
  public void remover(@PathVariable Long id) {
    Optional<FichaMedica> optional = repository.findById(id);
    if (optional.isPresent()) {
      repository.deleteById(id);
    }
  }

  @PutMapping("/{id}")
  public void atualizar(@PathVariable Long id, @RequestBody FichaMedica fichaMedica) {
    FichaMedica fichaMedicaAtualizada  = repository.getOne(id);
    fichaMedicaAtualizada.setAltura(fichaMedica.getAltura());
    fichaMedicaAtualizada.setIdDeficiencia(fichaMedica.getIdDeficiencia());
    fichaMedicaAtualizada.setPeso(fichaMedica.getPeso());
    fichaMedicaAtualizada.setPlanoDeSaude(fichaMedica.getPlanoDeSaude());
    repository.save(fichaMedicaAtualizada);
  }
}
