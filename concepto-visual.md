# Orquidea · Concepto visual

## 1. Idea central

**"Cada semestre, una floración."**

La orquídea no florece de golpe: abre una flor tras otra a lo largo de un mismo tallo. Orquidea toma esa imagen para representar el recorrido académico: la carrera es el tallo, cada semestre es un capullo que se abre cuando el estudiante lo cursa. Esa metáfora organiza toda la interfaz: progreso, cursos, entregas y foros.

**Personalidad de marca:** cercana, cuidada y serena. Es una plataforma académica que no se siente fría ni corporativa. Habla de tú, es clara y nunca infantil.

**Público:** estudiantes y docentes de universidades, institutos, tecnologías y técnicas. Se usa mucho en celular.

## 2. Activos base

| Activo | Archivo | Uso |
|---|---|---|
| Logotipo (caligráfico) | `assets/logotipo.jpg` | Encabezados, portada, login, correos |
| Isotipo (flor de línea) | `assets/isoptipo-base.png` | Favicon, app icon, avatar de institución, estados vacíos |

**Reglas de uso**
- Logotipo: espacio libre mínimo igual a la altura de la "O" en todos los lados. Ancho mínimo 120 px.
- Isotipo: ancho mínimo 24 px. Por debajo de 32 px usar solo el contorno ciruela y el centro magenta.
- No rotar, no estirar, no poner sobre fondos con poco contraste.
- Logotipo e isotipo no se muestran juntos en horizontal más de una vez por pantalla.

## 3. Color

Tomado directamente del isotipo y el logotipo.

| Nombre | Hex | Rol |
|---|---|---|
| Ciruela | `#3F1650` | Texto principal, contornos, navegación |
| Orquídea | `#5B2A86` | Color de marca, acciones primarias, enlaces |
| Magenta | `#9A1B6B` | Acento: progreso actual, entregas pendientes, notificaciones |
| Lila | `#C8B6DF` | Bordes, estados futuros, ilustración |
| Bruma | `#F1ECF7` | Superficies y tarjetas |
| Papel | `#FBF9FC` | Fondo general |

**Semánticos:** éxito `#2F7D5B`, aviso `#B7791F`, error `#B3261E`. Se usan solo para estados, nunca como decoración.

**Proporción sugerida:** 70 % Papel/Bruma, 20 % Ciruela/Orquídea, 10 % Magenta. El magenta es escaso a propósito: señala dónde está el estudiante *ahora*.

**Accesibilidad:** Ciruela sobre Papel y Orquídea sobre Papel superan 7:1. Magenta sobre Papel supera 5:1 (válido para texto).

## 4. Tipografía

| Rol | Fuente | Notas |
|---|---|---|
| Títulos | **Fraunces** (600) | Serif suave y orgánica, dialoga con las curvas del logotipo |
| Interfaz y texto | **Figtree** (400/500/600) | Legible a tamaños pequeños, amable |
| Marca | Caligrafía del logotipo | Solo como imagen, nunca para texto corrido |

**Escala:** 14 · 16 · 20 · 28 · 40 · 56. Texto corrido a 16 px, interlineado 1.6, máximo ~70 caracteres por línea.

## 5. Forma y composición

- **Tallo de semestres:** línea horizontal con un nodo por semestre. Cursado = nodo lleno ciruela; actual = nodo magenta con halo; futuro = nodo hueco lila. Es el elemento memorable del producto.
- **Radios:** 14 px en tarjetas, 999 px en chips y botones, 8 px en campos. Los radios cambian según el rol del elemento.
- **Contornos antes que sombras:** el isotipo está hecho de línea, así que la interfaz usa bordes de 1.5 px en Lila y reserva la sombra para menús y modales.
- **Trazos del isotipo** (nervaduras, hoja, capullo) se reutilizan como ilustración de estados vacíos.
- **Alineación:** contenido a la izquierda. Solo login, onboarding y estados vacíos van centrados.
- **Movimiento:** una sola animación característica, el capullo que abre al completar un semestre. El resto son transiciones de 150 ms que responden a una acción. Respetar `prefers-reduced-motion`.

## 6. Estructura del producto y cómo se ve

1. **Acceso por institución.** El correo académico (`@universidad.edu.co`) identifica la institución y abre su espacio con nombre y escudo.
2. **Programa y semestres.** Carrera, tecnología o técnica con el tallo de semestres arriba. Debajo, las materias del semestre elegido en tarjetas.
3. **Tareas y entregables.** Lista por materia con fecha límite, estado (pendiente, entregado, calificado) y zona para subir archivos.
4. **Foros.** Cualquier estudiante crea un foro, escribe un tema e invita a compañeros por correo o enlace. Hilos con respuestas anidadas a un nivel.

## 7. Voz y microcopy

- Frases cortas, verbos claros, sentence case, tuteo.
- El botón dice lo que pasa: **Subir entrega**, **Crear foro**, **Invitar compañeros**. La confirmación repite el verbo: "Entrega subida".
- Estados vacíos dan el siguiente paso: "Aún no hay foros en esta materia. Crea el primero e invita a tu grupo."
- Errores explican qué falló y cómo arreglarlo, sin disculpas: "El archivo pesa 32 MB. El máximo es 25 MB."

## 8. Qué evitar

- Morado genérico de "app de educación" con degradados. Aquí el morado tiene dos matices con función.
- Mascotas, birretes y libros como iconografía. La flor ya es el símbolo.
- Rellenar con magenta: pierde su función de señal.

## 9. Archivos del paquete

- `preview.html`: maqueta de referencia (inicio, tallo de semestres, tareas, foro, componentes).
- `assets/`: logotipo e isotipo originales.
