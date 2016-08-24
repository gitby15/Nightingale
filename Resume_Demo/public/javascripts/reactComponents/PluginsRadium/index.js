import Radium from 'radium';


module.exports = function KeyFrameRadium(Component){
                  	return Radium({
                  		plugins: [
                                    Radium.Plugins.mergeStyleArray,
                                    Radium.Plugins.checkProps,
                                    Radium.Plugins.resolveMediaQueries,
                                    Radium.Plugins.resolveInteractionStyles,
                                    Radium.Plugins.keyframes,
                                    Radium.Plugins.visited,
                                    Radium.Plugins.removeNestedStyles,
                                    Radium.Plugins.prefix,
                                    Radium.Plugins.checkProps,
                                  ]
                              })(Component);
                  }