package com.escola_segura.api.model.entity;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "turma")
public class Turma {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
  private String nome;

    @Column
    private String turno;

  @Column
  private Integer idAluno;

  @Column
  private Integer idMateria;


}
