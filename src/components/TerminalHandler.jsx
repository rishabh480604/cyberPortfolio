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
<TerminalOutput>- tech_scan   - technical skills of accessed user                                 </TerminalOutput>,
<TerminalOutput>- repo_list - projects developed                                                </TerminalOutput>,
<TerminalOutput>- exp_log  - work experience of accessed user                                  </TerminalOutput>,
<TerminalOutput>- edu_query - education of accessed user                                        </TerminalOutput>,
<TerminalOutput>- cert_check - certifications of accessed user                                   </TerminalOutput>,
<TerminalOutput>- connect   - connect to accessed user                                            </TerminalOutput>,
<TerminalOutput>- clear     - clear the terminal                                                </TerminalOutput>,
<TerminalOutput>- help      - manual of Sahil System                                            </TerminalOutput>,
  ]);
  const [init,setInit]=useState(terminalLineData);
  function onInput (input) {
    let ld = [...terminalLineData];
    
    // console.log(`New terminal input received: '${input}'`);
    ld.push(<TerminalInput>{input}</TerminalInput>);
  if (input.toLocaleLowerCase().trim() === 'tech_scan') {
   
    navigate("/skill");
    
  } else if (input.toLocaleLowerCase().trim() === 'repo_list') {
    navigate('/projects');
    
  } else if (input.toLocaleLowerCase().trim() === 'exp_log') {
    navigate('/experience');
    
  } else if (input.toLocaleLowerCase().trim() === 'edu_query') {
    navigate('/education');
    
    
  }else if (input.toLocaleLowerCase().trim() === 'cert_check') {
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
        name="Terminal"
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
