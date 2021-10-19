package com.escola_segura.api.model.entity;


import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "materia_professor")
public class MateriaProfessor {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "id_professor")
    private int professor;

    @Column(name = "id_materia")
    private int materia;
}
