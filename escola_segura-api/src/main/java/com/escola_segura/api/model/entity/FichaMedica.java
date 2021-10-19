package com.escola_segura.api.model.entity;

import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@Getter
@Setter
@NoArgsConstructor
@ToString
@Entity
@Table(name = "ficha_medica")
public class FichaMedica {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String tipoSanguineo;
    @Column
    private int deficiencia;
    @Column
    private Double peso;
    @Column
    private Double altura;
    @Column
    private String planoSaude;
}
