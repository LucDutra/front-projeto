package com.escola_segura.api.model.repositories;

import com.escola_segura.api.model.entity.FichaMedica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FichaMedicaRepository extends JpaRepository<FichaMedica, Long> {
}
