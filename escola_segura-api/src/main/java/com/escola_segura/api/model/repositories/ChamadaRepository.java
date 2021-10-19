package com.escola_segura.api.model.repositories;

import com.escola_segura.api.model.entity.Chamada;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ChamadaRepository extends JpaRepository<Chamada, Long> {
}
