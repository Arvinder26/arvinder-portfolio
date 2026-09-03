import type { CSSProperties } from 'react'
import type { DiagramStage, Project } from '../content'

export function ArchitecturePath({ stages, compact = false }: { stages: DiagramStage[]; compact?: boolean }) {
  return (
    <ol className={`architecture-path${compact ? ' is-compact' : ''}`} aria-label="System flow">
      {stages.map((stage, index) => (
        <li key={stage.label}>
          <span className="architecture-index">{String(index + 1).padStart(2, '0')}</span>
          <strong>{stage.label}</strong>
          {!compact && <p>{stage.note}</p>}
        </li>
      ))}
    </ol>
  )
}

function BookingVisual({ project }: { project: Project }) {
  return (
    <div className="project-visual booking-visual" role="img" aria-label="Representative booking interface and verified Fade Plug system flow">
      <div className="visual-caption"><span>USER FLOW</span><span>Representative interface</span></div>
      <div className="booking-layout">
        <div className="service-choice">
          <span className="ui-kicker">BOOK A MOBILE CUT</span>
          <strong>Choose a service</strong>
          <div className="choice-row"><span>Classic fade</span><span>45 min</span></div>
          <div className="choice-row"><span>Reference image</span><span>Private</span></div>
          <div className="choice-row is-selected"><span>Deposit</span><span>20%</span></div>
          <div className="ui-action">Continue securely <span>→</span></div>
        </div>
        <div className="system-lanes">
          {['User flow', 'Data', 'Payments', 'Security'].map((lane, index) => (
            <div className="system-lane" key={lane}>
              <span>{lane}</span>
              <i style={{ '--lane-width': `${86 - index * 10}%` } as CSSProperties} />
            </div>
          ))}
        </div>
      </div>
      <ArchitecturePath stages={project.architecture.slice(0, 5)} compact />
    </div>
  )
}

function VineyardVisual({ project }: { project: Project }) {
  const sensors = ['AIR', 'LEAF', 'IR', 'WIND', 'BATTERY', 'SIGNAL']
  return (
    <div className="project-visual vineyard-visual" role="img" aria-label="Smart Vineyard sensor inputs and data pipeline diagram">
      <div className="visual-caption"><span>DATA PIPELINE</span><span>Field prototype</span></div>
      <div className="sensor-board">
        <div className="sensor-inputs">
          {sensors.map((sensor, index) => <span key={sensor}><i>{String(index + 1).padStart(2, '0')}</i>{sensor}</span>)}
        </div>
        <div className="telemetry-readout">
          <span>LIVE TELEMETRY</span>
          <div className="signal-bars" aria-hidden="true">{[38, 64, 48, 76, 58, 88, 70, 92].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}</div>
          <small>Environment + device health</small>
        </div>
      </div>
      <ArchitecturePath stages={project.architecture} compact />
    </div>
  )
}

function GameVisual() {
  return (
    <div className="project-visual game-visual" role="img" aria-label="RECurseD gameplay state-machine diagram; this is a system diagram, not a gameplay capture">
      <div className="visual-caption"><span>STATE MACHINE</span><span>System diagram — not gameplay capture</span></div>
      <div className="game-state-map">
        <div className="game-state state-idle"><small>STATE 01</small><strong>Explore</strong><span>Player controls</span></div>
        <span className="state-link link-one" aria-hidden="true">→</span>
        <div className="game-state state-watch"><small>STATE 02</small><strong>Observe</strong><span>CCTV system</span></div>
        <span className="state-link link-two" aria-hidden="true">↘</span>
        <div className="game-state state-anomaly"><small>STATE 03</small><strong>Anomaly</strong><span>Shared game state</span></div>
        <span className="state-link link-three" aria-hidden="true">→</span>
        <div className="game-state state-chase"><small>STATE 04</small><strong>Escalate</strong><span>Countdown + chase</span></div>
      </div>
      <div className="asset-pipeline"><span>Blender</span><i>model · rig · animate</i><span>Unity</span><i>prefab · scene · test</i></div>
    </div>
  )
}

export function ProjectVisual({ project }: { project: Project }) {
  if (project.visual === 'booking') return <BookingVisual project={project} />
  if (project.visual === 'vineyard') return <VineyardVisual project={project} />
  return <GameVisual />
}
