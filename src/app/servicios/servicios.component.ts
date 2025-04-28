import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  // Datos de ejemplo para las secciones
  formatos = [
    { name: 'Solicitud de crédito', icon: 'bi-file-earmark-arrow-down', link: '/formatos/credito' },
    { name: 'Afiliación', icon: 'bi-person-plus', link: '/formatos/afiliacion' },
    { name: 'Actualización de datos', icon: 'bi-pencil-square', link: '/formatos/actualizacion' }
  ];

  politicas = [
    { title: 'Política de créditos', description: 'Requisitos y condiciones para acceder a créditos', link: '/politicas/creditos' },
    { title: 'Política de seguridad', description: 'Protección de datos y transacciones', link: '/politicas/seguridad' }
  ];

  educacion = [
    { title: 'Talleres financieros', description: 'Capacitaciones sobre manejo de finanzas personales', icon: 'bi-graph-up', link: '/educacion/talleres' },
    { title: 'Becas educativas', description: 'Apoyos para formación continua', icon: 'bi-award', link: '/educacion/becas' }
  ];

  seguros = [
    { title: 'Seguro de vida', description: 'Cobertura para asociados', icon: 'bi-heart-pulse' },
    { title: 'Auxilio funerario', description: 'Apoyo en casos de fallecimiento', icon: 'bi-flower1' }
  ];
}