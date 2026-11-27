# Generates illustrated mockup images (SVG) into images/. Run from site root: python3 tools/make_images.py
import os, math
N,B,L,T,G,M='#101B35','#386BFF','#E8EEFF','#F3F6FF','#CBD6F2','#9DB6FF'
GR=[(N,B),('#0A1226','#2A55D9'),('#1A2A52','#6E93FF'),(N,'#3F7BFF')]
_c=[0]
def uid(): _c[0]+=1; return 'c%d'%_c[0]
def bar(x,y,w,h=8,c=G): return f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h}" rx="{h/2}" fill="{c}"/>'
def rect(x,y,w,h,c,r=8,extra=''): return f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" rx="{r}" fill="{c}" {extra}/>'
def circ(x,y,r,c,extra=''): return f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r}" fill="{c}" {extra}/>'
def wrap(w,h,inner,grad=0,bg=True):
    a,b=GR[grad%4]
    defs=(f'<defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{a}"/><stop offset="1" stop-color="{b}"/></linearGradient>'
          f'<linearGradient id="ac" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="{B}"/><stop offset="1" stop-color="#7C9DFF"/></linearGradient>'
          '<filter id="sh" x="-20%" y="-20%" width="140%" height="160%"><feDropShadow dx="0" dy="16" stdDeviation="14" flood-color="#050B1E" flood-opacity=".42"/></filter></defs>')
    back=''
    if bg:
        back=(f'<rect width="{w}" height="{h}" fill="url(#bg)"/>'
              f'<circle cx="{w*.9}" cy="{h*.05}" r="{h*.5}" fill="#fff" opacity=".07"/><circle cx="{w*.04}" cy="{h*1.02}" r="{h*.42}" fill="#fff" opacity=".06"/>'
              f'<g opacity=".08" stroke="#fff">'+''.join(f'<path d="M{k*40} 0V{h}"/>' for k in range(1,w//40))+'</g>')
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w} {h}" font-family="Inter,Arial,sans-serif">{defs}{back}{inner}</svg>'
def browser(x,y,w,h,content,url='yourbrand.com',dark=False):
    c=uid(); bh=34
    s=f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="16" fill="#fff" filter="url(#sh)"/>'
    s+=f'<clipPath id="{c}"><rect x="{x}" y="{y}" width="{w}" height="{h}" rx="16"/></clipPath><g clip-path="url(#{c})">'
    s+=rect(x,y,w,bh,T,0)+circ(x+18,y+17,5,'#FF6B6B')+circ(x+34,y+17,5,'#FFC24B')+circ(x+50,y+17,5,'#34C77B')
    s+=f'<rect x="{x+76}" y="{y+8}" width="{w*.42:.0f}" height="18" rx="9" fill="#fff" stroke="{G}"/><text x="{x+90}" y="{y+21}" font-size="10" fill="#55627F">{url}</text>'
    s+=content(x,y+bh,w,h-bh)+'</g>'
    return s
def art(kind,x,y,w,h):
    s=f'<rect x="{x:.0f}" y="{y:.0f}" width="{w:.0f}" height="{h}" rx="16" fill="url(#ac)"/>'
    cx,cy=x+w/2,y+h/2
    if kind=='building':
        for k,(dx,hh) in enumerate([(-60,90),(-20,120),(24,100)]):
            s+=rect(cx+dx,y+h-hh-12,38,hh,'#fff',6,'opacity=".92"')
            for r in range(hh//26): s+=rect(cx+dx+8,y+h-hh+r*24,8,10,M,2)+rect(cx+dx+22,y+h-hh+r*24,8,10,M,2)
    elif kind=='house':
        s+=f'<polygon points="{cx-70},{cy-4} {cx},{cy-60} {cx+70},{cy-4}" fill="#fff" opacity=".95"/>'+rect(cx-56,cy-4,112,64,'#fff',6,'opacity=".9"')+rect(cx-12,cy+20,24,40,B,4)+rect(cx-44,cy+12,22,20,M,3)+rect(cx+22,cy+12,22,20,M,3)
    elif kind=='clinic':
        s+=circ(cx,cy,56,'#fff','opacity=".95"')+rect(cx-8,cy-30,16,60,B,4)+rect(cx-30,cy-8,60,16,B,4)
    else:
        s+=circ(cx-30,cy,46,'#fff','opacity=".9"')+circ(cx+34,cy+14,32,'#fff','opacity=".55"')
    return s
def site(title,kind):
    def f(x,y,w,h):
        s=rect(x,y,w,h,'#fff',0)+rect(x+22,y+16,22,22,B,7)+f'<text x="{x+52}" y="{y+32}" font-size="14" font-weight="800" fill="{N}">{title}</text>'
        for k in range(3): s+=bar(x+w-200+k*62,y+23,46,8)
        s+=rect(x+w-30-0,y+0,0,0,'#fff',0)
        hy=y+68
        s+=bar(x+22,hy,w*.40,18,N)+bar(x+22,hy+28,w*.30,18,B)+bar(x+22,hy+64,w*.36,7)+bar(x+22,hy+80,w*.32,7)+bar(x+22,hy+96,w*.26,7)
        s+=rect(x+22,hy+122,112,34,B,17)+rect(x+146,hy+122,96,34,'#fff',17,f'stroke="{G}"')
        s+=art(kind,x+w*.52,hy-8,w*.43,172)
        cy=y+h-104
        for k in range(3):
            cx=x+22+k*((w-44)/3)
            s+=rect(cx,cy,(w-44)/3-14,84,T,14,f'stroke="{G}"')+rect(cx+14,cy+14,26,26,L,8)+bar(cx+14,cy+54,60,7,N)+bar(cx+14,cy+68,90,6)
        return s
    return f
def shop(title,food=False):
    pal=[('#DCE6FF',B),('#FFE9D6','#FF9A4D'),('#DFF5EA','#1FA86B'),('#EFE3FF','#8B5CF6')]
    def f(x,y,w,h):
        s=rect(x,y,w,h,'#fff',0)+rect(x+22,y+14,22,22,B,7)+f'<text x="{x+52}" y="{y+30}" font-size="14" font-weight="800" fill="{N}">{title}</text>'
        s+=rect(x+w*.4,y+14,w*.28,24,T,12,f'stroke="{G}"')+circ(x+w-48,y+26,13,L)+circ(x+w-30,y+14,8,B)
        s+=rect(x+22,y+54,w-44,70,'url(#ac)',16)+bar(x+44,y+76,w*.3,14,'#fff')+bar(x+44,y+98,w*.2,8,'#DCE6FF')+rect(x+w-150,y+80,96,26,'#fff',13)
        cw=(w-44-3*12)/4
        for k,(bgc,fg) in enumerate(pal):
            cx=x+22+k*(cw+12); cy=y+138
            s+=rect(cx,cy,cw,h-cy+y-12,'#fff',14,f'stroke="{G}"')+rect(cx+8,cy+8,cw-16,90,bgc,10)
            if food: s+=circ(cx+cw/2,cy+53,32,'#fff')+circ(cx+cw/2,cy+53,22,fg)
            else: s+=rect(cx+cw/2-24,cy+26,48,56,fg,10,'opacity=".9"')+rect(cx+cw/2-10,cy+14,20,14,fg,6,'opacity=".6"')
            s+=bar(cx+12,cy+110,cw*.6,7,N)+rect(cx+12,cy+126,48,18,L,9)+bar(cx+cw-34,cy+131,22,8,B)
        return s
    return f
def dash(kind,title):
    def f(x,y,w,h):
        s=rect(x,y,w,h,T,0)+rect(x,y,112,h,N,0)+rect(x+16,y+16,22,22,B,7)+bar(x+46,y+23,50,8,'#fff')
        for k in range(5): s+=rect(x+14,y+60+k*34,84,24,'#2A3C6D' if k else B,8)+bar(x+26,y+68+k*34,50,7,'#fff' if k==0 else '#7D8DB5')
        mx=x+128; mw=w-144
        s+=f'<text x="{mx}" y="{y+30}" font-size="15" font-weight="800" fill="{N}">{title}</text>'+circ(x+w-30,y+24,13,L)+circ(x+w-30,y+24,6,B)
        if kind=='kanban':
            cw=(mw-28)/3
            for k,(lab,c) in enumerate([('To do',M),('In progress',B),('Done','#34C77B')]):
                cx=mx+k*(cw+14)
                s+=rect(cx,y+50,cw,h-64,'#E6ECFB',12)+f'<text x="{cx+12}" y="{y+72}" font-size="11" font-weight="700" fill="{N}">{lab}</text>'+circ(cx+cw-16,y+68,5,c)
                for r in range(3 if k<2 else 2):
                    s+=rect(cx+10,y+84+r*66,cw-20,56,'#fff',10)+bar(cx+20,y+96+r*66,cw*.55,7,N)+bar(cx+20,y+112+r*66,cw*.4,6)+circ(cx+cw-30,y+122+r*66,8,c)
        elif kind=='analytics':
            sw=(mw-24)/3
            for k in range(3): s+=rect(mx+k*(sw+12),y+48,sw,64,'#fff',12)+bar(mx+k*(sw+12)+12,y+62,40,6)+bar(mx+k*(sw+12)+12,y+80,60,16,N)+bar(mx+k*(sw+12)+12,y+102,30,5,'#34C77B')
            s+=rect(mx,y+124,mw*.58,h-138,'#fff',12)
            for k in range(8): bh=30+((k*37)%70); s+=rect(mx+18+k*((mw*.58-36)/8),y+h-24-bh,16,bh,B if k%2 else M,4)
            lx=mx+mw*.58+12; lw=mw*.42-12
            s+=rect(lx,y+124,lw,h-138,'#fff',12)
            pts=' '.join(f'{lx+14+k*(lw-28)/6:.0f},{y+h-40-[20,45,30,70,52,90,76][k]:.0f}' for k in range(7))
            s+=f'<polyline points="{pts}" fill="none" stroke="{B}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'
        else: # chat
            s+=rect(mx,y+48,mw*.32,h-62,'#fff',12)
            for k in range(4): s+=circ(mx+22,y+78+k*48,12,[B,M,'#34C77B',G][k])+bar(mx+42,y+72+k*48,mw*.14,7,N)+bar(mx+42,y+86+k*48,mw*.1,6)
            cx=mx+mw*.32+12; cw=mw*.68-12
            s+=rect(cx,y+48,cw,h-62,'#fff',12)
            for k,(side,wd) in enumerate([(0,.5),(1,.45),(0,.6),(1,.35)]):
                bx=cx+14 if side==0 else cx+cw-14-cw*wd
                s+=rect(bx,y+66+k*50,cw*wd,36,L if side==0 else B,14)+bar(bx+14,y+80+k*50,cw*wd*.6,7,N if side==0 else '#fff')
            s+=rect(cx+14,y+h-52,cw-28,28,T,14,f'stroke="{G}"')+circ(cx+cw-34,y+h-38,10,B)
        return s
    return f
def phone(x,y,w,h,screen):
    c=uid()
    s=rect(x,y,w,h,N,30,'stroke="#fff" stroke-opacity=".5" stroke-width="2" filter="url(#sh)"')
    s+=f'<clipPath id="{c}"><rect x="{x+7}" y="{y+7}" width="{w-14}" height="{h-14}" rx="24"/></clipPath><g clip-path="url(#{c})">{rect(x+7,y+7,w-14,h-14,"#fff",0)}{screen(x+7,y+7,w-14,h-14)}</g>'
    s+=rect(x+w/2-26,y+12,52,12,N,6)
    return s
def bank(x,y,w,h):
    s=rect(x,y,w,h,T,0)+bar(x+16,y+40,50,7)+bar(x+16,y+56,90,14,N)
    s+=rect(x+14,y+84,w-28,86,'url(#ac)',16)+bar(x+28,y+100,60,7,'#DCE6FF')+bar(x+28,y+120,100,12,'#fff')+bar(x+28,y+146,50,6,'#DCE6FF')+circ(x+w-38,y+146,10,'#fff','opacity=".6"')
    for k in range(4): s+=rect(x+14,y+184+k*46,w-28,38,'#fff',12)+circ(x+34,y+203+k*46,10,[L,'#FFE9D6','#DFF5EA',L][k])+bar(x+52,y+196+k*46,60,7,N)+bar(x+52,y+210+k*46,40,6)+bar(x+w-60,y+200+k*46,36,8,B if k%2 else N)
    return s
def edu(x,y,w,h):
    s=rect(x,y,w,h,T,0)+bar(x+16,y+40,80,12,N)+rect(x+14,y+66,w-28,86,'url(#ac)',16)+circ(x+w-44,y+108,24,'#fff','opacity=".25"')+f'<polygon points="{x+w-50},{y+98} {x+w-50},{y+120} {x+w-32},{y+109}" fill="#fff"/>'+bar(x+28,y+88,90,10,'#fff')+bar(x+28,y+108,60,7,'#DCE6FF')
    for k in range(3):
        s+=rect(x+14,y+168+k*58,w-28,50,'#fff',12)+rect(x+24,y+178+k*58,30,30,[L,'#EFE3FF','#DFF5EA'][k],8)+bar(x+64,y+184+k*58,70,7,N)+rect(x+64,y+202+k*58,w-110,6,G,3)+rect(x+64,y+202+k*58,(w-110)*[.8,.5,.3][k],6,B,3)
    return s
def uix(kind):
    def f(x,y,w,h): return ''
    s=''
    scr=bank if kind=='bank' else edu
    s+=phone(70,150,190,360,lambda a,b,c,d: scr(a,b,c,d) if False else (edu(a,b,c,d) if kind!='bank' else edu(a,b,c,d)))
    return s
def phones(kind):
    main=bank if kind=='bank' else edu
    side1=main
    s=phone(80,95,190,380,side1)+phone(530,95,190,380,side1)
    s+=phone(305,50,200,420,main)
    return s
def landing(kind):
    def f(x,y,w,h):
        s=rect(x,y,w,h,'#fff' if kind=='saas' else N,0)
        txt='#fff' if kind=='gym' else N
        s+=rect(x+22,y+14,20,20,B,6)+bar(x+50,y+20,60,8,txt)
        for k in range(3): s+=bar(x+w-190+k*58,y+20,40,7,G if kind=='saas' else '#3A4D80')
        s+=rect(x+w-76,y+13,54,22,B,11)
        if kind=='saas':
            cx=x+w/2
            s+=rect(cx-70,y+58,140,22,L,11)+bar(cx-50,y+66,100,6,B)
            s+=bar(cx-w*.25,y+96,w*.5,20,N)+bar(cx-w*.17,y+126,w*.34,20,B)+bar(cx-w*.2,y+162,w*.4,7)+bar(cx-w*.15,y+178,w*.3,7)
            s+=rect(cx-96,y+200,100,34,B,17)+rect(cx+10,y+200,90,34,'#fff',17,f'stroke="{G}"')
            for k in range(3): bx=x+30+k*((w-60)/3); s+=rect(bx,y+h-96,(w-60)/3-14,80,T,14)+rect(bx+14,y+h-82,24,24,[B,M,'#34C77B'][k],8)+bar(bx+14,y+h-46,70,7,N)+bar(bx+14,y+h-32,100,6)
        else:
            s+=bar(x+30,y+70,w*.34,20,'#fff')+bar(x+30,y+100,w*.26,20,'#7C9DFF')+bar(x+30,y+136,w*.3,7,'#6F82B3')+bar(x+30,y+152,w*.26,7,'#6F82B3')
            s+=rect(x+30,y+178,110,34,B,17)
            ax=x+w*.62
            s+=rect(ax-10,y+52,w*.32,190,'url(#ac)',20)+circ(ax+w*.14,y+110,30,'#fff','opacity=".9"')+rect(ax+w*.14-40,y+146,80,86,'#fff',30,'opacity=".9"')
            for k in range(3): bx=x+30+k*((w-60)/3); s+=rect(bx,y+h-90,(w-60)/3-14,74,'#1A2A52' if k!=1 else B,14)+bar(bx+14,y+h-76,50,7,'#fff')+bar(bx+14,y+h-56,70,14,'#fff')
        return s
    return f
# ---------- projects ----------
PROJ={
 'khan':(0,lambda:browser(60,70,680,390,site('Khan Enterprises','building'),'khanenterprises.com')),
 'stylehub':(1,lambda:browser(60,70,680,390,shop('StyleHub'),'stylehub.store')),
 'taskflow':(2,lambda:browser(50,60,700,400,dash('kanban','TaskFlow'),'app.taskflow.io')),
 'finbank':(3,lambda:phones('bank')),
 'premier':(1,lambda:browser(60,70,680,390,site('Premier Estate','house'),'premierrealestate.com')),
 'analytics':(0,lambda:browser(50,60,700,400,dash('analytics','Analytics Pro'),'analyticspro.app')),
 'saas':(2,lambda:browser(60,60,680,400,landing('saas'),'launch.yoursaas.com')),
 'foodexpress':(3,lambda:browser(60,70,680,390,shop('FoodExpress',True),'foodexpress.pk')),
 'edulearn':(1,lambda:phones('edu')),
 'medicare':(2,lambda:browser(60,70,680,390,site('MediCare Clinic','clinic'),'medicareclinic.com')),
 'fitlife':(0,lambda:browser(60,60,680,400,landing('gym'),'fitlifegym.com')),
 'chatsphere':(3,lambda:browser(50,60,700,400,dash('chat','ChatSphere'),'chat.chatsphere.app')),
}
for k,(g,fn) in PROJ.items():
    open(f'images/projects/{k}.svg','w').write(wrap(800,500,fn(),g))
# ---------- blog covers (800x400) ----------
def card(x,y,w,h): return rect(x,y,w,h,'#fff',18,'filter="url(#sh)"')
def scene(kind):
    s=''
    if kind=='speed':
        cx,cy=400,230; s+=card(240,60,320,280)
        s+=f'<path d="M{cx-90} {cy+40} A90 90 0 0 1 {cx+90} {cy+40}" fill="none" stroke="{L}" stroke-width="18" stroke-linecap="round"/><path d="M{cx-90} {cy+40} A90 90 0 0 1 {cx+62} {cy-24}" fill="none" stroke="{B}" stroke-width="18" stroke-linecap="round"/>'
        s+=f'<line x1="{cx}" y1="{cy+40}" x2="{cx+48}" y2="{cy-18}" stroke="{N}" stroke-width="6" stroke-linecap="round"/>'+circ(cx,cy+40,12,N)+bar(cx-60,cy+84,120,12,N)+bar(cx-40,cy+106,80,8)
    elif kind=='responsive':
        s+=rect(190,90,300,200,'#fff',14,'filter="url(#sh)"')+rect(190,90,300,24,T,14)+rect(206,130,120,12,N,6)+rect(206,152,180,8,G,4)+rect(206,200,80,60,L,10)+rect(296,200,80,60,L,10)+rect(386,200,80,60,L,10)
        s+=rect(510,140,100,170,N,16,'filter="url(#sh)"')+rect(516,152,88,146,'#fff',10)+rect(524,164,50,8,B,4)+rect(524,184,72,40,L,8)+rect(524,236,72,8,G,4)
        s+=rect(380,230,40,0,N)
    elif kind=='color':
        for k,c in enumerate([B,N,'#8B5CF6','#FF9A4D','#34C77B']): s+=circ(250+k*75,200+(k%2)*24,44,c,'filter="url(#sh)"')
        s+=card(260,262,280,56)+bar(280,282,120,10,N)+bar(280,300,80,7)
    elif kind=='seo':
        s+=card(190,60,420,70)+circ(226,95,12,'none',f'stroke="{B}" stroke-width="4"')+f'<line x1="235" y1="104" x2="246" y2="115" stroke="{B}" stroke-width="4" stroke-linecap="round"/>'+bar(262,88,200,12,G)
        for k in range(3): s+=card(190,150+k*66,420,54)+bar(210,164+k*66,200-k*30,10,B if k==0 else N)+bar(210,182+k*66,320,7)+rect(540,166+k*66,50,22,L if k else B,11)
    elif kind=='revenue':
        s+=card(220,50,360,300)
        for k in range(6): hh=40+k*34; s+=rect(250+k*50,320-hh,32,hh,B if k>2 else M,8)
        s+=f'<polyline points="262,250 312,230 362,222 412,180 462,150 512,108" fill="none" stroke="{N}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'+circ(512,108,8,N)
    elif kind=='code':
        s+=rect(200,60,400,280,N,16,'stroke="#fff" stroke-opacity=".25" filter="url(#sh)"')+circ(226,84,5,'#FF6B6B')+circ(242,84,5,'#FFC24B')+circ(258,84,5,'#34C77B')
        for k,(ind,wd,c) in enumerate([(0,120,'#7C9DFF'),(20,180,'#fff'),(20,140,'#34C77B'),(40,200,'#FFC24B'),(40,90,'#fff'),(20,60,'#7C9DFF'),(0,100,'#7C9DFF'),(0,150,'#9DB6FF')]): s+=bar(226+ind,116+k*26,wd,9,c)
    elif kind=='security':
        s+=f'<path d="M400 50 L540 100 V210 C540 280 480 320 400 350 C320 320 260 280 260 210 V100 Z" fill="#fff" filter="url(#sh)"/>'+rect(364,180,72,62,B,10)+f'<path d="M378 182 V168 a22 22 0 0 1 44 0 V182" fill="none" stroke="{B}" stroke-width="9"/>'+circ(400,212,8,'#fff')
    elif kind=='micro':
        s+=circ(400,200,110,'#fff','opacity=".12"')+circ(400,200,76,'#fff','opacity=".2"')+rect(310,170,180,60,B,30,'stroke="#fff" stroke-width="3" filter="url(#sh)"')+bar(350,196,100,10,'#fff')
        s+=f'<path d="M470 240 l0 44 l12 -12 l14 28 l12 -6 l-14 -26 l16 0 z" fill="#fff" stroke="{N}" stroke-width="3" stroke-linejoin="round"/>'
    elif kind=='voice':
        s+=card(300,60,200,150)+rect(380,92,40,70,B,20)+f'<path d="M360 140 a40 40 0 0 0 80 0" fill="none" stroke="{N}" stroke-width="6" stroke-linecap="round"/><line x1="400" y1="180" x2="400" y2="196" stroke="{N}" stroke-width="6"/>'
        for k,hh in enumerate([30,60,90,60,30]): s+=rect(210+k*18,250-hh/2,10,hh,'#fff',5,'opacity=".8"')+rect(520+k*18,250-hh/2,10,hh,'#fff',5,'opacity=".8"')
    elif kind=='partner':
        s+=card(190,70,200,260)+card(410,70,200,260)
        for k in range(4):
            s+=circ(222,112+k*60,12,'#34C77B')+f'<path d="M216 112 l5 5 l9 -10" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'+bar(246,106+k*60,110,9,N)+bar(246,122+k*60,80,6)
            s+=circ(442,112+k*60,12,'#FF6B6B')+f'<path d="M436 106 l12 12 M448 106 l-12 12" stroke="#fff" stroke-width="3" stroke-linecap="round"/>'+bar(466,106+k*60,110,9,N)+bar(466,122+k*60,80,6)
    return s
KIND={'high-performance':'speed','responsive-design':'responsive','color-psychology':'color','on-page-seo':'seo','revenue-growth':'revenue','github-pages':'code','web-security':'security','micro-interactions':'micro','voice-search':'voice','dev-partner':'partner'}
for i,(k,v) in enumerate(KIND.items()):
    open(f'images/blog/{k}.svg','w').write(wrap(800,400,scene(v),i))
# ---------- hero + about ----------
def hero():
    s=browser(30,70,720,470,site('Your Brand','building'),'yourbrand.com')
    s+=phone(600,260,210,420,bank)
    s+=rect(0,20,210,92,'#fff',18,'filter="url(#sh)"')+rect(16,36,34,34,L,10)+f'<polyline points="24,62 32,52 40,57 46,44" fill="none" stroke="{B}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>'+bar(62,40,70,7)+bar(62,56,100,14,N)+bar(62,78,50,6,'#34C77B')
    s+=rect(100,560,230,70,'#fff',18,'filter="url(#sh)"')+circ(136,595,18,'#34C77B')+'<path d="M127 595 l7 7 l12 -14" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>'+bar(168,584,110,9,N)+bar(168,602,80,7)
    return wrap(840,700,s,0,False)
open('images/hero.svg','w').write(hero())
def about():
    s=rect(40,50,420,300,N,18,'stroke="#fff" stroke-opacity=".2" filter="url(#sh)"')+circ(66,74,5,'#FF6B6B')+circ(82,74,5,'#FFC24B')+circ(98,74,5,'#34C77B')
    for k,(ind,wd,c) in enumerate([(0,110,'#7C9DFF'),(18,170,'#fff'),(18,130,'#34C77B'),(36,190,'#FFC24B'),(36,90,'#fff'),(18,70,'#7C9DFF'),(0,100,'#7C9DFF'),(0,140,'#9DB6FF'),(18,120,'#fff')]): s+=bar(66+ind,108+k*26,wd,9,c)
    s+=browser(290,36,400,374,site('Client','house'),'client.com')+rect(60,330,150,70,'#fff',16,'filter="url(#sh)"')+circ(92,365,16,B)+bar(120,352,70,8,N)+bar(120,368,50,6)
    return wrap(720,440,s,2)
open('images/about.svg','w').write(about())
print('images ok')
