package com.escola_segura.api.model.repositories;

import com.escola_segura.api.model.entity.Escola;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EscolaRespository  extends JpaRepository<Escola, Long> {
}
