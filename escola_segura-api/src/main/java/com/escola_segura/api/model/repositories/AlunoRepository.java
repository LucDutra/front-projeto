package com.escola_segura.api.model.repositories;

import com.escola_segura.api.model.entity.Aluno;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlunoRepository extends JpaRepository<Aluno, Long> {
}
