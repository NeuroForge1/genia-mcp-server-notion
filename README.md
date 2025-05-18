# Notion MCP Server para GENIA

Un servidor MCP (Model Context Protocol) para Notion que permite a GENIA interactuar con páginas, bases de datos y otros recursos de Notion.

## Características

- Autenticación con token de integración interna de Notion
- Operaciones completas sobre páginas y bases de datos
- Búsqueda avanzada en el espacio de trabajo
- Integración con el orquestador MCP de GENIA
- Soporte para autenticación por usuario

## Requisitos

- Docker
- Token de integración interna de Notion con los permisos adecuados

## Instalación

### Usando Docker

```bash
docker pull ghcr.io/neuroforge1/genia-mcp-server-notion:latest
```

### Ejecución

```bash
docker run -i --rm -e NOTION_INTEGRATION_TOKEN=your_token ghcr.io/neuroforge1/genia-mcp-server-notion
```

## Operaciones Soportadas

### Búsqueda

- `search`: Busca páginas y bases de datos en el espacio de trabajo
- `search_by_title`: Busca páginas por título
- `search_by_property`: Busca páginas por propiedades específicas

### Páginas

- `get_page`: Obtiene información de una página específica
- `create_page`: Crea una nueva página
- `update_page`: Actualiza el contenido de una página
- `delete_page`: Archiva una página

### Bases de Datos

- `get_database`: Obtiene información de una base de datos
- `query_database`: Consulta registros en una base de datos
- `create_database`: Crea una nueva base de datos
- `update_database`: Actualiza la estructura de una base de datos
- `add_item_to_database`: Añade un nuevo registro a una base de datos

## Integración con GENIA

Este servidor MCP está diseñado para integrarse con el orquestador MCP de GENIA, permitiendo que los usuarios conecten sus propias cuentas de Notion y ejecuten operaciones a través de la interfaz unificada de GENIA.

### Ejemplo de Configuración en el Orquestador

```python
orchestrator.register_server(
    name="notion",
    command=["docker", "run", "-i", "--rm", "-e", "NOTION_INTEGRATION_TOKEN", "ghcr.io/neuroforge1/genia-mcp-server-notion"],
    env_vars={"NOTION_INTEGRATION_TOKEN": "${NOTION_TOKEN}"}
)
```

## Manejo de Errores

El servidor incluye manejo robusto de errores para:

- Tokens inválidos o expirados
- Permisos insuficientes
- Límites de API excedidos
- Recursos no encontrados
- Errores de formato en solicitudes

Cada error incluye un código específico y un mensaje descriptivo para facilitar la depuración.

## Desarrollo

### Requisitos

- Node.js 16+
- npm o yarn

### Instalación de Dependencias

```bash
npm install
```

### Compilación

```bash
npm run build
```

### Pruebas

```bash
npm test
```

## Licencia

MIT

## Autor

GENIA Team
