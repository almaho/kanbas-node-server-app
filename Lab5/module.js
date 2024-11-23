// module.js
const module = {
    id: "1",
    name: "React Basics",
    description: "Introduction to React concepts",
    course: "Web Development",
  };
  
  export default function ModuleRoutes(app) {
    // Route to get the module object
    app.get("/lab5/module", (req, res) => {
      res.json(module);
    });
  
    // Route to get the module name
    app.get("/lab5/module/name", (req, res) => {
      res.json(module.name);
    });
  
    // Route to update the module name
    app.get("/lab5/module/name/:newName", (req, res) => {
      const { newName } = req.params;
      module.name = newName;
      res.json(module);
    });

  
    // Route to update the module description
    app.get("/lab5/module/description", (req, res) => {
      const { newDescription } = req.params;
      module.description = newDescription;
      res.json(module);
    });

    app.get("/lab5/module/description/:newDescription", (req, res) => {
        const { newDescription } = req.params;
        if (newDescription) {
          module.description = newDescription;
          res.json(module);
        } 
      });
  };
  