package com.escola_segura.api.model.repositories;

import com.escola_segura.api.model.entity.EscolaUnica;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EscolaUnicaRepository extends JpaRepository<EscolaUnica, Long> {
}
