/**
 * Created with JetBrains WebStorm.
 * User: Lam Do
 * Date: 12/2/13
 * Time: 10:22 PM
 * To change this template use File | Settings | File Templates.
 */
puremvc.define({
        name: 'App.controller.command.StartupCommand',
        parent: puremvc.MacroCommand
    },
    // INSTANCE MEMBERS
    {
        /** @override */
        initializeMacroCommand: function () {
            // add the PrepareControllerCommand- it will register Commands with the Facade
            this.addSubCommand( App.controller.command.PrepareControllerCommand );

            // add the SetupViewsCommand- it will register Mediators with the Facade
            this.addSubCommand( App.controller.command.PrepareViewCommand );

            // add the PrepareModelCommand- it will register Proxys with the Facade
            this.addSubCommand( App.controller.command.PrepareModelCommand );
        }
    }
);