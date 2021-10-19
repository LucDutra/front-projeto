package com.escola_segura.api.model.entity;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "escola_unica")
public class EscolaUnica {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_escola")
    private int escola;

    @Column(name = "id_professor")
    private int professor;

    @Column(name = "id_aluno")
    private int aluno;
}
