package com.escola_segura.api.model.repositories;

import com.escola_segura.api.model.entity.Professor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProfessorRespository extends JpaRepository<Professor, Long> {
}
