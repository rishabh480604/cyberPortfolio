import React, { useState } from 'react';
import Terminal, { ColorMode, TerminalOutput,TerminalInput } from 'react-terminal-ui';
import "./TerminalHandler.css"; 
import { useNavigate } from 'react-router';


const TerminalHandler = ( ) => {
  const navigate=useNavigate();
  const [terminalLineData, setTerminalLineData] = useState([
    

<TerminalOutput>        ██████╗  ██████╗  ███╗   ███╗ ███╗   ███╗  █████╗  ███╗   ██╗ ██████╗     </TerminalOutput>,
<TerminalOutput>       ██╔════╝ ██╔═══██╗ ████╗ ████║ ████╗ ████║ ██╔══██╗ ████╗  ██║ ██╔══██╗    </TerminalOutput>,
<TerminalOutput>       ██║      ██║   ██║ ██╔████╔██║ ██╔████╔██║ ███████║ ██╔██╗ ██║ ██║  ██║    </TerminalOutput>,
<TerminalOutput>       ██║      ██║   ██║ ██║╚██╔╝██║ ██║╚██╔╝██║ ██╔══██║ ██║╚██╗██║ ██║  ██║    </TerminalOutput>,
<TerminalOutput>       ╚██████╗ ╚██████╔╝ ██║ ╚═╝ ██║ ██║ ╚═╝ ██║ ██║  ██║ ██║ ╚████║ ██████╔╝    </TerminalOutput>,
<TerminalOutput>        ╚═════╝  ╚═════╝  ╚═╝     ╚═╝ ╚═╝     ╚═╝ ╚═╝  ╚═╝ ╚═╝  ╚═══╝ ╚═════╝     </TerminalOutput>,
<TerminalOutput>                                                                                  </TerminalOutput>,
<TerminalOutput>               ██████╗ ███████╗ ███╗   ██╗ ████████╗ ███████╗ ███████╗            </TerminalOutput>,
<TerminalOutput>              ██╔════╝ ██╔════╝ ████╗  ██║ ╚══██╔══╝ ██╔════╝ ██╔══███╗           </TerminalOutput>,
<TerminalOutput>              ██║      █████╗   ██╔██╗ ██║    ██║    █████╗   ███████╔╝           </TerminalOutput>,
<TerminalOutput>              ██║      ██╔══╝   ██║╚██╗██║    ██║    ██╔══╝   ██╔══╗█╚╗           </TerminalOutput>,
<TerminalOutput>              ╚██████╗ ███████╗ ██║ ╚████║    ██║    ███████╗ ██║  ║██║           </TerminalOutput>,
<TerminalOutput>               ╚═════╝ ╚══════╝ ╚═╝  ╚═══╝    ╚═╝    ╚══════╝ ╚═╝  ╚══╝           </TerminalOutput>,

<TerminalOutput>NAME                                                                               </TerminalOutput>,
<TerminalOutput>                              Sahil Sachin Borse                                  </TerminalOutput>,
<TerminalOutput>SYNOPSIS                                                                           </TerminalOutput>,
<TerminalOutput>Cybersecurity  professional  skilled  in  threat  intelligence ,  vulnerability </TerminalOutput>,
<TerminalOutput>assessment, and SIEM integration, with hands-on experience.                     </TerminalOutput>,                                          
<TerminalOutput>DESCRIPTION                                                                         </TerminalOutput>,
<TerminalOutput>Cybersecurity professional with experience in threat intelligence, vulnerability</TerminalOutput>,
<TerminalOutput>scanning, and SIEM integration. Built real-time dashboards, honeypots,and custom</TerminalOutput>,
<TerminalOutput>tools for attack detection and analysis.  Proficient in frameworks like NIST CSF</TerminalOutput>,
<TerminalOutput>and tools like Splunk, Flask, and SentinelOne.                                  </TerminalOutput>,
<TerminalOutput>OPTIONS                                                                            </TerminalOutput>,
<TerminalOutput>- sys_cap   - technical skills of accessed user                                 </TerminalOutput>,
<TerminalOutput>- code_logs - projects developed                                                </TerminalOutput>,
<TerminalOutput>- ops_hist  - work experience of accessed user                                  </TerminalOutput>,
<TerminalOutput>- nldg_base - education of accessed user                                        </TerminalOutput>,
<TerminalOutput>- verf_cred - certifications of accessed user                                   </TerminalOutput>,
<TerminalOutput>- connect - connect to accessed user                                            </TerminalOutput>,
  ]);
  const [init,setInit]=useState(terminalLineData);
  function onInput (input) {
    let ld = [...terminalLineData];
    
    // console.log(`New terminal input received: '${input}'`);
    ld.push(<TerminalInput>{input}</TerminalInput>);
  if (input.toLocaleLowerCase().trim() === 'sys_cap') {
   
    navigate("/skill");
    
  } else if (input.toLocaleLowerCase().trim() === 'code_logs') {
    navigate('/projects');
    
  } else if (input.toLocaleLowerCase().trim() === 'ops_hist') {
    navigate('/experience');
    
  } else if (input.toLocaleLowerCase().trim() === 'nldg_base') {
    navigate('/education');
    
    
  }else if (input.toLocaleLowerCase().trim() === 'verf_cred') {
    navigate('/certification');
    
    
  }else if (input.toLocaleLowerCase().trim() === 'connect') {
    navigate('/contact');
    
    
  }else if (input.toLocaleLowerCase().trim() === 'clear') {
    ld = [];
    ld.push(<TerminalOutput>                                                                                   </TerminalOutput>)
  }else if (input.toLocaleLowerCase().trim() === 'help') {
//     const ldFormatted = `
// OPTIONS:
//   - sys_cap    : technical skills of accessed user 
//   - code_logs  : projects developed 
//   - ops_hist   : work experience of accessed user 
//   - nldg_base  : education of accessed user 
//   - verf_cred  : certifications of accessed user
// `.trim();

    ld.push(init);
    // console.log(ld);
  }else{
    ld.push(<TerminalOutput>Unrecognized command for help type  'sahil -help'</TerminalOutput>);
    
  }
  setTerminalLineData(ld);
}

  // Terminal has 100% width by default, so it should usually be wrapped in a container div
  return (
    <div 
    className="min-w-2/3 md:min-w-1/2 lg:min-w-1/3 xl:min-w-1/4 2xl:min-w-1/5
    " 
    // id="mat"
    >
      <Terminal
        name="Sahil Sachin Borse System"
        height='80vh'
        colorMode={ColorMode.Dark}
        onInput={onInput}
      >
        {terminalLineData}
      </Terminal>
    </div>
  );
}

export default TerminalHandler;
