package com.escola_segura.api.model.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "aluno")
public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String nome;

    @Column(name = "id_endereco")
    private int endereco;

    @Column
    private String telefone;

    @Column(name = "id_escola")
    private int escola;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "id_responsavel")
    private Responsavel responsavel;

    @Column
    private String cpf;

    @Column(name = "id_turma")
    private int turma;

    @Column
    private String email;

    @Column(name = "id_ficha_medica")
    private int fichaMedica;

    private String sexo;

}
