package com.escola_segura.api.model.entity;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "responsavel")
public class Responsavel {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String nome;

    @Column
    private String endereco;

    @Column
    private String telefone;

    @Column
    private String cpf;

    @Column
    private String estadoCivil;

    @Column
    private String email;

    @OneToMany(mappedBy = "responsavel")
    private List<Aluno> alunos = new ArrayList<>();
}
