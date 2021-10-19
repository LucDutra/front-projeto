package com.escola_segura.api.model.repositories;

import com.escola_segura.api.model.entity.Materia;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MateriaRepository extends JpaRepository<Materia, Long> {
}
